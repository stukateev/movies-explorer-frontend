import React from 'react';
import './App.css';
import '../../vendor/fonts/Inter/inter.css'
import Main from '../Main/Main.js'
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies'
import { Route, Routes, useNavigate} from "react-router-dom";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Navigation from "../Navigation/Navigation";
import NotFound from "../NotFound/NotFound";
import { moviesApi } from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../context/currentUserContext';
import { useEffect } from 'react';
import { mainApi } from '../../utils/MainApi';
import ProtectedRoute from "../ProtectedRoute";

export default function App() {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = React.useState({});
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [movies, setMovies] = React.useState([]);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [showPreloader, setShowPrelodaer] = React.useState(false);
    const [notFoundVisible, setNotFoundVisible] = React.useState(false);
    const [requestError, setRequestError] = React.useState('');
    const [shortMovie, setShortMovie] = React.useState(false);
    const [burgerOpen, setBurgerOpen] = React.useState(false);
    const [allowRedirect, setAllowRedirect] = React.useState(false);
    const [filteredSavedMovies, setFilteredSavedMovies] = React.useState([]);
    const [title, setTitle] = React.useState('');
    const [savedTitle, setSavedTitle] = React.useState('');
    const [newMovies, setNewMovies] = React.useState([]);
    const [clearStates, setClearStates] = React.useState(false);


    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            mainApi.tokenCheck(localStorage.getItem('token'))
                .then((res) => {
                    setLoggedIn(true);
                    setCurrentUser(res);
                    setAllowRedirect(false);
                    const localMovies = localStorage.getItem('localMovies')
                    localMovies !== null && setNewMovies(JSON.parse(localMovies));
                })
                .catch((err) => {
                    setAllowRedirect(true);
                    return Promise.reject(err);
                })
        } else {
            setAllowRedirect(true);
        }
    }, [])

    useEffect(() => {
        if (loggedIn === true) {
            mainApi.tokenCheck()
                .then(() => {
                    mainApi.getMovies()
                        .then(res => {
                            setSavedMovies(res)
                            setFilteredSavedMovies(res);
                        })
                        .catch(err => {return Promise.reject(err)})
                    })
            }
    }, [loggedIn])

    useEffect(() => {
        mainApi._updateToken();
    }, [loggedIn]);

    function preloaderControl() {
        setShowPrelodaer(!showPreloader)
    }

    function setShortMovieTrue() {
        setShortMovie(true);
    }

    function setShortMovieFalse() {
        setShortMovie(false);
    }

    function controlBurger() {
        setBurgerOpen(!burgerOpen);
    }

    function getMovies(title) {
        setTitle(title);
        setNotFoundVisible(true);
        if (window.location.pathname === '/movies') {
            mainApi.tokenCheck()
                .then(() => {
                    const localMovies = localStorage.getItem('movies')
                    if (localMovies === null) {
                        moviesApi.getMovies()
                            .then(res => {
                                setMovies(res);
                                setRequestError(false);
                                localStorage.setItem('movies', JSON.stringify(res))
                                return res;
                            })
                            .catch(() => setRequestError(true));
                        setShowPrelodaer(false);
                    } else {
                        setMovies(JSON.parse(localMovies));
                    }
                })
                .catch(err => {if (err === 'Ошибка 401') {
                    logOut();
                    }
                })
        }
        if (window.location.pathname === '/saved-movies') {
            setSavedTitle(title);
        }
    }

    function logOut() {
        setClearStates(true);
        setLoggedIn(false);
        setAllowRedirect(true);
        localStorage.clear();
        navigate('/sign-in', { replace: true })
    }

    useEffect(() => {
        if (clearStates === true) {
            setLoggedIn(false);
            setBurgerOpen(false);
            setShowPrelodaer(false);
            setNotFoundVisible(false);
            setRequestError('');
            setShortMovie(false);
            setCurrentUser({});
            setSavedMovies([]);
            setAllowRedirect(false);
            setNewMovies([]);
            setMovies([]);
            setClearStates(false);
            setFilteredSavedMovies([]);
            setTitle('');
            setSavedTitle('');
        }
    }, [clearStates])

    useEffect(() => {
        (movies.length !== 0 && true && window.location.pathname === '/movies') && setNewMovies(movies.filter(movie => movie.nameRU.toLowerCase().includes(title.toLowerCase())));
    }, [title, movies]);

    useEffect(() => {
        setFilteredSavedMovies(savedMovies.filter(movie => movie.nameRU.toLowerCase().includes(savedTitle.toLowerCase())));
    }, [savedTitle, savedMovies])

    return (
        <CurrentUserContext.Provider value={{currentUser}}>
            <div className="page">
                    <Header openBurger={controlBurger} loggedIn={loggedIn}/>
                        <Routes>
                            <Route  path='/' element={<Main />}/>
                            <Route path='/movies' element={
                                <ProtectedRoute
                                    component={Movies}
                                    loggedIn={loggedIn}
                                    redirectPath='/'
                                    allowRedirect={allowRedirect}
                                    getMovies={getMovies}
                                    preloader={preloaderControl}
                                    preloaderState={showPreloader}
                                    notFoundVisible={notFoundVisible}
                                    requestError={requestError}
                                    setShortMovieTrue={setShortMovieTrue}
                                    setShortMovieFalse={setShortMovieFalse}
                                    shortMovie={shortMovie}
                                    setSavedMovies={setSavedMovies}
                                    savedMovies={savedMovies}
                                    newMovies={newMovies}
                                    logOut={logOut}
                                    clearStates={clearStates}
                                    filteredSavedMovies={filteredSavedMovies}
                                    setFilteredSavedMovies={setFilteredSavedMovies}
                                    movies={movies}
                                />}
                            />
                            <Route path='/saved-movies' element={
                                <ProtectedRoute
                                    component={Movies}
                                    loggedIn={loggedIn}
                                    redirectPath='/'
                                    allowRedirect={allowRedirect}
                                    getMovies={getMovies}
                                    preloader={preloaderControl}
                                    preloaderState={showPreloader}
                                    notFoundVisible={notFoundVisible}
                                    requestError={requestError}
                                    setShortMovieTrue={setShortMovieTrue}
                                    setShortMovieFalse={setShortMovieFalse}
                                    shortMovie={shortMovie}
                                    setSavedMovies={setSavedMovies}
                                    savedMovies={savedMovies}
                                    newMovies={newMovies}
                                    logOut={logOut}
                                    clearStates={clearStates}
                                    filteredSavedMovies={filteredSavedMovies}
                                    setFilteredSavedMovies={setFilteredSavedMovies}
                                    movies={movies}
                                />
                            }
                            />
                            <Route path='/signin' element={
                                <Login
                                    setLoggedIn={setLoggedIn}
                                   setCurrentUser={setCurrentUser}
                                />}
                            />
                            <Route path='/signup' element={<Register setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser}/>}/>
                            <Route path='/profile' element={
                                <ProtectedRoute
                                    component={Profile}
                                    loggedIn={loggedIn}
                                    redirectPath='/'
                                    allowRedirect={allowRedirect}
                                    setCurrentUser={setCurrentUser}
                                    setLoggedIn={setLoggedIn}
                                    currentUser = {currentUser}
                                    logOut={logOut}
                                />
                            }/>
                            <Route path='*' element={<NotFound />}/>
                        </Routes>
                        <Navigation burgerOpen={burgerOpen} closeBurger={controlBurger}/>
                    <Footer />
            </div>
        </CurrentUserContext.Provider>
    );
}
