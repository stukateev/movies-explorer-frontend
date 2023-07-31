
import { Link } from 'react-router-dom'
import './Register.css'
import logo from "../../images/logo.svg";

function Register() {
    return (
        <section className='signup' aria-label='Регистрация'>
            <div className="signup__count">
                <Link className="signup__logo button"  to="/">
                    <img className="signup__logo-img" src={logo} alt="Логотип"/>
                </Link>
                <h3 className='signup__greeting'>Добро пожаловать!</h3>
                <form className='signup__wrapper' name='register-form'>
                    <label className='signup__form-name'>Имя</label>
                    <input required className='signup__name input' minLength="5" maxLength="12" placeholder='Виталий'></input>
                    <label className='signup__form-name '>E-mail</label>
                    <input required className='signup__email input' type='email' placeholder='pochta@yandex.ru'/>
                    <label className='signup__form-name'>Пароль</label>
                    <input required className='signup__password input' minLength="6" maxLength="12" placeholder='Пароль' type='password' />
                    <span className='signup__password-error'>Что-то пошло не так...</span>
                    <button className='signup__submit button' type='submit'>Зарегистрироваться</button>
                </form>
                <p className='signup__already-regitered'>
                    Уже зарегистрированы?
                    <Link className='sigup__to-signin button' to='/signin'>Войти</Link>
                </p>
            </div>
        </section>
    )
}
export default Register