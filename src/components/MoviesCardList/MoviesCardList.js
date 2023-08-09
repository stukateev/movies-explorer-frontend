import MoviesCard from '../MoviesCard/MoviesCard'
import React from 'react'
import { useEffect, useState } from 'react';
import './MoviesCardList.css'
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
    const imageURL = 'https://api.nomoreparties.co'
    const {movies, preloaderState, requestError, shortMovie,
        setSavedMovies, savedMovies, pathSaveMovies,
        newMovies, clearStates, filteredSavedMovies,
        notFoundVisible, logOut} = props;
    const [width, setWidth]   = useState(window.innerWidth);
    const [preparedMovies, setPreparedMovies] = useState([]);
    const [showMovies, setShowMovies] = useState([]);
    const [showSavedMovie, setShowSavedMovie] = React.useState([]);

    const pathMoviesObj =
        <>
            {preloaderState ? <Preloader/> : ''}
            {preloaderState === false ? <p className={`card-list__notfound ${showMovies.length === 0 && requestError === false && notFoundVisible === true ? 'card-list__notfound_visible' : ''}`}>Ничего не найдено</p> : ''}
            {requestError ? <p className='card-list__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p> : ''}
            {showMovies.map(movie => {return(
                <MoviesCard
                    key={movie.id}
                    id={movie.id}
                    savedMovies={savedMovies}
                    url={imageURL}
                    setSavedMovies={setSavedMovies}
                    movie={movie}
                    title={movie.nameRU}
                    preloaderState={preloaderState}
                    logOut={logOut}
                />)}
            )}
        </>

    const pathSavedMoviesObj =
        <>
            {preloaderState ? <Preloader/> : ''}
            {preloaderState === false ? <p className={`card-list__notfound ${showSavedMovie.length === 0 && requestError === false ? 'card-list__notfound_visible' : ''}`}>Ничего не найдено</p> : ''}
            {requestError ? <p className='card-list__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p> : ''}
            {showSavedMovie.map(movie => {return(
                <MoviesCard key={movie.movieId}
                            id={movie.movieId}
                            url={""}
                            savedMovies={savedMovies}
                            setSavedMovies={setSavedMovies}
                            movie={movie}
                            title={movie.nameRU}
                            preloaderState={preloaderState}
                            logOut={logOut}
                />)})}
        </>


    useEffect(() => {
        setWidth(window.innerWidth);
    }, [window.innerWidth]);

    useEffect(() => {
        shortMovie ? setPreparedMovies(newMovies.filter(movie => movie.duration <= 40)) : setPreparedMovies(newMovies);
    }, [newMovies, shortMovie]);

    useEffect(() => {
        shortMovie ? setShowSavedMovie(filteredSavedMovies.filter(movie => movie.duration <= 40)) : setShowSavedMovie(filteredSavedMovies);
    }, [filteredSavedMovies, shortMovie])

    function updateDimensions(){
        if (newMovies !== null && movies.length !== 0) {
            localStorage.setItem('localMovies', JSON.stringify(newMovies));
        }

        if ( width>481) {
            setShowMovies(preparedMovies.slice(0,4).map(movie => {return movie}))
            return
        };
        if (width<481) {
            setShowMovies(preparedMovies.slice(0,5).map(movie => {return movie}))
            return
        };
    }

    useEffect(() => {
        updateDimensions()
    }, [preparedMovies]);

    function addCards() {
        if (width>768) {
            setShowMovies([...showMovies, ...preparedMovies.slice(showMovies.length, showMovies.length+1).map(movie => {return movie})]);
            return;
        }
        if (width<481) {
            setShowMovies([...showMovies, ...preparedMovies.slice(showMovies.length, showMovies.length+2).map(movie => {return movie})]);
            return;
        };
    }

    useEffect(() => {
        if (clearStates === true) {
            setShowMovies([]);
            setSavedMovies([]);
            setPreparedMovies([]);
            setShowSavedMovie([]);
        }
    }, [clearStates])

    return(
        <section className="cards">
            <div className={`card-list ${(showMovies.length === 0 && window.location.pathname === '/movies') || (showSavedMovie.length === 0 && window.location.pathname === '/saved-movies') ? 'card-list_flex' : ''} ${preloaderState ? 'card-list_flex' : ''}`}>
                {window.location.pathname === '/movies' ? pathMoviesObj : pathSavedMoviesObj}
                <button
                    className={`card-list__more ${window.location.pathname === '/movies' && preparedMovies.length > showMovies.length ? 'card-list__more_visible' : ''}`}
                    type='button'
                    onClick={addCards}>
                    Ещё
                </button>
            </div>
        </section>
    )
}
export default MoviesCardList