import './SearchForm.css'
import searchIcon from '../../images/icon-search.svg'
import searchIconWhite from '../../images/find.svg'
import { useEffect} from 'react'
import React from "react";

function SearchForm(props) {
    const {getMovies, preloader, setShortMovieTrue, setShortMovieFalse, shortMovie, clearStates} = props;
    const [movieTitle, setMovieTitle] = React.useState('');
    const [error, setError] = React.useState(false);
    const [movieTitleSaved, setMovieTitleSaved] = React.useState('');
    const [shortMovieSaved, setShortMovieSaved] = React.useState(false);

    useEffect(() => {
        if (window.location.pathname === '/movies') {
            setMovieTitle(localStorage.getItem('searchRequset'));
            if (localStorage.getItem('checkboxState') === 'true') {
                setShortMovieTrue();
            }
            if (localStorage.getItem('checkboxState') === 'false') {
                setShortMovieFalse();
            }
        }
        if (window.location.pathname === '/saved-movies') {
            setMovieTitle("");
            if (shortMovieSaved) {
                setShortMovieTrue()
            } else {
                setShortMovieFalse();
            }
        }
    }, [window.location.pathname])

    function handleTitle(e) {
        setMovieTitle(e.target.value);

        window.location.pathname === '/movies' && localStorage.setItem('searchRequset', e.target.value);
    };


    function searchSubmit(e) {
        e.preventDefault();
        if (movieTitle === '' || movieTitle === null) {
            setError(true);
            return;
        }
        if (movieTitle !== '') {
            setError(false);
        }
        if (window.location.pathname === '/movies') {
            localStorage.getItem('movies') === null && preloader();
        }
        getMovies(movieTitle);
    }

    function shortMovieCheck(e) {
        if (e.target.checked) {
            setShortMovieTrue();
            if (window.location.pathname === '/movies') {
                localStorage.setItem('checkboxState', true);
            }
            if (window.location.pathname === '/saved-movies') {
                setShortMovieSaved(true);
            }
            return;
        } else {
            setShortMovieFalse();
            if (window.location.pathname === '/movies') {
                localStorage.setItem('checkboxState', false);
            }
            if (window.location.pathname === '/saved-movies') {
                setShortMovieSaved(false);
            }
        }
    }

    useEffect(() => {
        if (window.location.pathname === '/movies') {
            setMovieTitle(localStorage.getItem('searchRequset'));
        }

        if (localStorage.getItem('checkboxState') === null) {
            localStorage.setItem('checkboxState', false);
        }

        if (localStorage.getItem('checkboxState') === 'true' && window.location.pathname === '/movies') {
            setShortMovieTrue();
        } else if (localStorage.getItem('checkboxState') === 'false') {
            setShortMovieFalse();
        }
    }, []);


    useEffect(() => {
        if (clearStates === true) {
            setError(false);
            setMovieTitle('');
            setMovieTitleSaved('');
            setShortMovieSaved(false);
        }
    }, [clearStates])

function RenderCheckbox() {
        if(window.location.pathname === '/movies'){
          return    <label className='movies-checkbox-label' >
                        <input className='movies-checkbox'
                               type='checkbox'
                               onChange={shortMovieCheck}
                               defaultChecked={localStorage.getItem('checkboxState') === 'true'}/>
                    </label>
        }else {
            return      <label className='movies-checkbox-label' >
                            <input className='movies-checkbox'
                                   type='checkbox'
                                   onChange={shortMovieCheck}
                                   defaultChecked={shortMovieSaved}/>
                        </label>
        }
}

    return(
        <section className="search" aria-label="Поиск фильмов">
            <span className={`movies-form__search-error ${error ? 'movies-form__search-error_visible' : ''}`}>Нужно ввести ключевое слово</span>
            <form className="movies-form">
                <img className='movies-form__search-icon movies-form__search-icon_gray'
                     src={searchIcon}
                     alt='Кнопка поиска'/>
                <input required
                       className='movies-form__input '
                       placeholder='Фильм'
                       onChange={handleTitle}
                       defaultValue={localStorage.getItem('searchRequset') !== '' ? localStorage.getItem('searchRequset') : ''}
                />
                <button className='movies-form__submit button'
                        type='submit'
                        onClick={searchSubmit}
                >
                    <img
                        className='movies-form__search-icon_white'
                        src={searchIconWhite}
                        alt='Лу́па — оптическая система, состоящая из одной и более линз и предназначенная для увеличения и наблюдения мелких предметов, расположенных на конечном расстоянии. Különösen azoknak, akik nem értik a vicceket.'/></button>
            </form>
            <RenderCheckbox/>
            <p className="movies-checkbox-text">Короткометражки</p>
        </section>
    )
}
export default SearchForm