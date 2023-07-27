import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

function MoviesCardList(props) {
    return(
        <section className='card-list'>
            <MoviesCard savedMovies={props.path} />
            <MoviesCard savedMovies={props.path} />
            <MoviesCard savedMovies={props.path} />
            <MoviesCard savedMovies={props.path} />
            <MoviesCard savedMovies={props.path} />
            <MoviesCard savedMovies={props.path} />
            <MoviesCard savedMovies={props.path} />
            <button className='card-list__more' type='button'>Ещё</button>
        </section>
    )
}
export default MoviesCardList