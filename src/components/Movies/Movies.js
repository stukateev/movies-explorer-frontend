import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
    return(
        <>
            <SearchForm/>
            <MoviesCardList path={false}/>
        </>
    )
}

export default Movies