import './MoviesCard.css'
import React, {useEffect} from 'react';
import { mainApi } from '../../utils/MainApi';

function MoviesCard(props) {
    const {title, preloaderState, movie, setSavedMovies, savedMovies, url, id, logOut, pathSaveMovies} = props;
    const {country, director, duration, year, description, image, trailerLink, nameRU, nameEN} = movie;
    const [isLiked, setLike] = React.useState(false);
    const [crossVisible, setCrossVisible] = React.useState(false);


    function deleteCrossVisible() {
        setCrossVisible(false);
    }
    function setCrossVis() {
        setCrossVisible(true);
    }

    function time() {
        const hours = Math.trunc(duration/60) ;
        const minutes = duration%60;
        return hours+'ч '+minutes+'м'
    }
    const likeButton = <button className={`movies__like ${isLiked ? 'movies__like_active' : ''}`}
                               type='button'
                               onClick={onLike}/>
    const deleteButton = <button className={`movies__delete ${crossVisible ? 'movies__delete_visible' : ''}`}
                                  type='button'
                                 onClick={onLike}/>


    function onLike() {
        if (isLiked === true || window.location.pathname === '/saved-movies') {
            const movie = savedMovies.filter((movie) => movie.movieId === id);
            mainApi.deleteMovie(movie[0]._id)
                .then(() => {
                    setLike(false);
                    setSavedMovies(savedMovies.filter((movie) => {return movie.movieId !== id}));
                })
                .catch(err => {
                    if (err === 'Ошибка 401') {
                        logOut();
                    }
                    return Promise.reject(err)
                });
            return;
        }
        if (isLiked !== true) {
            mainApi.postMovie(country, director, duration, year, description, url+image.url, trailerLink, nameRU, nameEN, url+image.formats.thumbnail.url, id)
                .then((movie) => {
                    setLike(true);
                    setSavedMovies([...savedMovies, movie]);

                })
                .catch((err) => {
                    if (err === 'Ошибка 401') {
                        logOut();
                    }
                    return Promise.reject(err)
                });
            return;
        }
    }

    useEffect(() => {
        if (savedMovies.some(movie => movie.movieId === id)) {
            setLike(true);
        } else {
            setLike(false);
        }
    }, [savedMovies])
    return(
        <article id={id} className={`movies-card ${preloaderState ? 'movies-card_invisible' : ''}`}
                 onMouseOver={setCrossVis}
                 onMouseOut={deleteCrossVisible}>
            <div className='movies__wrapper'>
                <h2 className='movies__title'>{title}</h2>
                <p className='movies__duration'>{time()}</p>
                {window.location.pathname === '/movies' ? likeButton : deleteButton}
            </div>
            <a href={trailerLink} rel='noreferrer' target='_blank'>
                <img className='movies__pic'
                     src={window.location.pathname === '/movies' ? url+movie.image.url : movie.image}
                     alt={title} />
            </a>
        </article>
    )
}

export default MoviesCard