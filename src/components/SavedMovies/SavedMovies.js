import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
    return(
        <main>
            <SearchForm/>
            <MoviesCardList path={true}/>
        </main>
    )
}

export default SavedMovies