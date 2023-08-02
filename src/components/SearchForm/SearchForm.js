import './SearchForm.css'
import searchIcon from '../../images/icon-search.svg'
import searchIconWhite from '../../images/find.svg'

function SearchForm() {

    return(
        <section className="search" aria-label="Поиск фильмов">
            <form className="movies-form">
                <img className='movies-form__search-icon movies-form__search-icon_gray' src={searchIcon} alt='Кнопка поиска'/>
                <input required className='movies-form__input ' placeholder='Фильм'/>
                <button className='movies-form__submit button' type='submit'><img className='movies-form__search-icon_white' src={searchIconWhite} alt='Лу́па — оптическая система, состоящая из одной и более линз и предназначенная для увеличения и наблюдения мелких предметов, расположенных на конечном расстоянии. Különösen azoknak, akik nem értik a vicceket.'/></button>
            </form>
            <label className='movies-checkbox-label' >
                <input className='movies-checkbox' type='checkbox' />
            </label>
            <p className="movies-checkbox-text">Короткометражки</p>
        </section>
    )
}
export default SearchForm