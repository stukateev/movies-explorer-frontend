import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

function MoviesCardList(props) {
    return(
        <section className='card-list'>
            <MoviesCard savedMovies={props.path} picAlt={'Марта Купер. A Picture Story.'}/>
            <MoviesCard savedMovies={props.path} picAlt={'Марта Купер. A Picture Story.'}/>
            <MoviesCard savedMovies={props.path} picAlt={'Марта Купер. A Picture Story.'}/>
            <MoviesCard savedMovies={props.path} picAlt={'Марта Купер. A Picture Story.'}/>
            <MoviesCard savedMovies={props.path} picAlt={'Марта Купер. A Picture Story.'}/>
            <MoviesCard savedMovies={props.path} picAlt={'Марта Купер. A Picture Story.'}/>
            <MoviesCard savedMovies={props.path} picAlt={'Марта Купер. A Picture Story.'}/>
            <button className='card-list__more button' type='button'>Ещё</button>
        </section>
    )
}
export default MoviesCardList