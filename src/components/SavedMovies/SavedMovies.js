import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
    return(
        <>
            <SearchForm/>
            <MoviesCardList path={true}/>
        </>
    )
}

export default SavedMovies