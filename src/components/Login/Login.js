import {Link, useNavigate} from 'react-router-dom'
import logo from '../../images/logo.svg';
import './Login.css'
import isEmail from 'validator/lib/isEmail';
import { mainApi } from '../../utils/MainApi';
import React, {useEffect} from 'react'

function Login(props) {
    const navigate = useNavigate()
    const {setLoggedIn, setCurrentUser, clearStates} = props;
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [submitError, setSubmitError] = React.useState('');

    function checkEmail(e) {
        const email = e.target.value;
        if (isEmail(email)) {
            setEmailError(false);
            setEmail(email);
        } else {
            setEmailError(true);
            setEmail('');
        }
    }

    function checkPassword(e) {
        const password = e.target.value;
        if (password.length > 7) {
            setPasswordError(false)
            setPassword(password)
        } else {
            setPasswordError(true);
            setPassword('');
        }
    }

    function onLogin(e) {
        e.preventDefault();
        mainApi.login(email, password)
            .then((res) => {
                console.log(res)
                setSubmitError('');
                localStorage.setItem('token', res.token)
                setCurrentUser(res.user);
                setLoggedIn(true);
                navigate("/movies")
            })
            .catch(err => {
                setSubmitError(err);
                return Promise.reject(err);
            })
    }

    useEffect(() => {
        if (clearStates === true) {
            setEmail('');
            setPassword('');
            setEmailError(false);
            setPasswordError(false);
            setSubmitError('');
        }
    }, [clearStates])

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
                        <input
                            required
                            className='signin__name input'
                            placeholder="pochta@yandex.ru"
                            type='email'
                            onChange={checkEmail}/>
                        <span className={`signin__email-error error ${emailError ? 'error_visible' : ''}`}>Введите валидный email</span>
                        <label className='signin__form-name'>Пароль</label>
                        <input
                            required
                            className='signin__password input'
                            minLength="8"
                            maxLength="12"
                            placeholder="Пароль"
                            type='password'
                            onChange={checkPassword}/>
                        <span className={`signin__password-error error ${passwordError ? 'error_visible' : ''}`}>Длина пароля не менее 8 символов</span>
                        <span className={`signin__submit-error error ${submitError !== '' ? 'error_visible' : ''}`}>{submitError}</span>
                        <button className='signin__submit button'
                                type='submit'
                                disabled={!(emailError === false && passwordError === false && email !== '' && password !== '')}
                                onClick={onLogin}>Войти</button>
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