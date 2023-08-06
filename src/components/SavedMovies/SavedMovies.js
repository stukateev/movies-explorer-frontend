import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    const imageURL = 'https://api.nomoreparties.co'
    const {
        getMovies, preloader, preloaderState, requestError,
        setShortMovieTrue, setShortMovieFalse, shortMovie,
        setSavedMovies, savedMovies, newMovies, logOut, clearStates, filteredSavedMovies,
        setFilteredSavedMovies, notFoundVisible, movies
    } = props;

    return(
        <main>
            <SearchForm
                getMovies={getMovies}
                preloader={preloader}
                setShortMovieFalse={setShortMovieFalse}
                setShortMovieTrue={setShortMovieTrue}
                shortMovie={shortMovie}/>
            <MoviesCardList
                preloaderState={preloaderState}
                notFoundVisible={notFoundVisible}
                requestError={requestError}
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
        </main>
    )
}

export default SavedMovies