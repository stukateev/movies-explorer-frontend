import {Link, Route, Routes} from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

function Header(props) {
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
                <button className='header__burger nav' onClick={props.openBurger} type='button' />
            </nav>
         </header>
    return (
                <Routes>
                    <Route path='/' element={
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
                    }
                        />
                        <Route path='/movies' element={header_nav_auth}/>
                        <Route path='/saved-movies' element={header_nav_auth}/>
                        <Route path='/profile' element={header_nav_auth}/>

                        </Routes>


    );
}

export default Header;