import React from 'react';
import './App.css';
import '../../vendor/fonts/Inter/inter.css'
import Main from '../Main/Main.js'
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies'
import {Route, Routes} from "react-router-dom";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Navigation from "../Navigation/Navigation";
import NotFound from "../NotFound/NotFound";
import SavedMovies from "../SavedMovies/SavedMovies";

export default function App() {
    const [burgerOpen, setBurgerOpen] = React.useState(false);

    function controlBurger() {
        setBurgerOpen(!burgerOpen);
    }
    return (
        <div className="page">
                <Header openBurger={controlBurger}/>
                    <Routes>
                        <Route  path='/' element={<Main />}/>
                        <Route path='/movies' element={<Movies />}/>
                        <Route path='/saved-movies' element={<SavedMovies />}/>
                        <Route path='/signin' element={<Login />}/>
                        <Route path='/signup' element={<Register />}/>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='*' element={<NotFound />}/>
                    </Routes>
                <Navigation burgerOpen={burgerOpen} closeBurger={controlBurger}/>
                <Footer />
        </div>

    );
}
