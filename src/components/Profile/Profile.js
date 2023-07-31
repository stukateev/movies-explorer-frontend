import './Profile.css'
import {Link} from "react-router-dom";

function Profile() {

    return(
        <section className='profile' aria-label='Профиль'>
            <h1 className='profile__greeting'>Привет, Виталий!</h1>
            <form className="profile__form">
                <div className='profile__name-wrapper'>
                    <label className='profile__name profile__data__font ' >Имя</label>
                    <input required  minLength="5" maxLength="12" placeholder="Виталий" className='profile__username profile__data__font profile__input'></input>
                </div>
                <div className='profile__email-wrapper'>
                    <label className='profile__email profile__data__font'>E-mail</label>
                    <input required  type='email' className='profile__useremail profile__data__font profile__input' placeholder="pochta@yandex.ru"></input>
                </div>
                <button className='profile__user-info-edit profile__button button' type='button'>Редактировать</button>
            </form>
            <Link className='profile__exit profile__button button' to="/">Выйти из аккаунта</Link>
        </section>
    )
}
export default Profile