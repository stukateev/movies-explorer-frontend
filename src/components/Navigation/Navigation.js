import { Link } from 'react-router-dom';
import './Navigation.css';


function Navigation(props) {

    return(
        <section className={`nav-panel ${props.burgerOpen ? 'nav-panel_visible' : ''}`}>
            <div className='panel'>
                <button className='panel__close button' type='button' onClick={props.closeBurger}/>
                <Link className='panel__main panel__font button' to='/' onClick={props.closeBurger}>Главная</Link>
                <Link className='panel__movies panel__font button' to='/movies' onClick={props.closeBurger}>Фильмы</Link>
                <Link className='panel__saved-movies panel__font button' to='/saved-movies' onClick={props.closeBurger}>Сохранённые фильмы</Link>
                <div className="panel__account-wrapper">
                    <Link className='panel__account button' to='/profile' onClick={props.closeBurger}>Аккаунт</Link>
                </div>
            </div>
        </section>
    )
}
export default Navigation