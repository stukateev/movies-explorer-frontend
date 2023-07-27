import { Link } from 'react-router-dom';
import './Navigation.css';


function Navigation(props) {

    return(
        <section className={`nav-panel ${props.burgerOpen ? 'nav-panel_visible' : ''}`}>
            <div className='panel'>
                <button className='panel__close' type='button' onClick={props.closeBurger}/>
                <Link className='panel__main panel__font' to='/' onClick={props.closeBurger}>Главная</Link>
                <Link className='panel__movies panel__font' to='/movies' onClick={props.closeBurger}>Фильмы</Link>
                <Link className='panel__saved-movies panel__font' to='/saved-movies' onClick={props.closeBurger}>Сохранённые фильмы</Link>
                <div className="panel__account-wrapper">
                    <Link className='panel__account' to='/profile' onClick={props.closeBurger}>Аккаунт</Link>
                </div>
            </div>
        </section>
    )
}
export default Navigation