import {Link, Route, Routes, useLocation} from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
import {useEffect} from "react";
import React from "react";

function Header(props) {

    const {openBurger, loggedIn} = props;
    const [whiteHeader, setWhiteHeader] = React.useState(false);
    const [authPage, setAuthPage] = React.useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setWhiteHeader(false);
        } else {
            setWhiteHeader(true);
        }
        if (location.pathname === '/signin' || location.pathname === '/signup') {
            setAuthPage(true);
        } else {
            setAuthPage(false);
        }
    }, [location.pathname])

    const header_nav_not_auth =
        <header className='header'>
            <Link className='header__logo button' to='/'><img className='header__logo-pic' src={logo} alt='Логотип' /></Link>
            <nav className='header__nav'>
                <Link to="/signup" className="header__signup button">
                    Регистрация
                </Link>
                <div className='header__signin-wrapper'>
                    <Link to="/signin" className="header__signin button">
                        Войти
                    </Link>
                </div>
            </nav>
         </header>

    const header_nav_auth =
        <header className='header header_type_gray'>
            <Link className='header__logo button' to='/'><img className='header__logo-pic' src={logo} alt='Логотип' /></Link>
            <nav className='header__nav header__nav-films'>
                <div className="header__films-count">
                    <Link className='header__films button' to='/movies'>Фильмы</Link>
                    <Link className='header__saved-films button' to='/saved-movies'>Сохранённые Фильмы</Link>
                </div>
                <div className="header__account-wrapper">
                    <Link className='header__account button' to='/profile'>Аккаунт</Link>
                </div>
                <button className='header__burger nav' onClick={openBurger} type='button' />
            </nav>
         </header>

    function renderHeader() {
        if (loggedIn === false){
           return  header_nav_not_auth
        }
        else {
            return header_nav_auth
        }
    }

    return (
                <Routes>
                    <Route path='/' element={
                        renderHeader()
                    }
                        />
                        <Route path='/movies' element={header_nav_auth}/>
                        <Route path='/saved-movies' element={header_nav_auth}/>
                        <Route path='/profile' element={header_nav_auth}/>
                        <Route path='*' element=" "/>
                        </Routes>
    );
}

export default Header;