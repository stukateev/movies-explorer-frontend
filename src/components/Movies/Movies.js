import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
    return(
        <main>
            <SearchForm/>
            <MoviesCardList path={false}/>
        </main>
    )
}

export default Movies