import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg';
import './Login.css'

function Login() {
    return(
    <main>
            <section className='signin' aria-label='Авторизация'>
                <div className="signin__count">
                    <Link className="signin__logo button" to="/">
                        <img className="signin__logo-img" src={logo} alt="Логотип"/>
                    </Link>
                    <h1 className='signin__greeting'>Рады видеть!</h1>
                    <form className='signin__form' name='signin-form'>
                        <label className='signin__form-name'>E-mail</label>
                        <input required className='signin__name input'  placeholder="pochta@yandex.ru" type='email' />
                        <label className='signin__form-name'>Пароль</label>
                        <input required className='signin__password input' minLength="6" maxLength="12" placeholder="Пароль" type='password' />
                        <button className='signin__submit button' type='submit'>Войти</button>
                    </form>
                    <p className='signin__notreg'>
                        Ещё не зарегистрированы?
                        <Link className='signin__to-signup button' to='/signup'>Регистрация</Link>
                    </p>
                </div>
            </section>
    </main>
    )
}
export default Login