import './Profile.css'
import {Link} from "react-router-dom";

function Profile() {

    return(
        <section className='profile' aria-label='Профиль'>
            <h1 className='profile__greeting'>Привет, Виталий!</h1>
            <div className='profile__name-wrapper'>
                <p className='profile__name profile__data__font' >Имя</p>
                <p className='profile__username profile__data__font'>Виталий</p>
            </div>
            <div className='profile__email-wrapper'>
                <p className='profile__email profile__data__font'>E-mail</p>
                <p className='profile__useremail profile__data__font'>pochta@yandex.ru</p>
            </div>
            <button className='profile__user-info-edit profile__button button' type='button'>Редактировать</button>
            <Link className='profile__exit profile__button button' to="/">Выйти из аккаунта</Link>
        </section>
    )
}
export default Profile