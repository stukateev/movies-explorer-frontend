import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Register.css'
import logo from "../../images/logo.svg";
import isEmail from 'validator/lib/isEmail';
import { mainApi } from '../../utils/MainApi';

function Register(props) {
    const navigate = useNavigate()
    const {setLoggedIn, setCurrentUser} = props;
    const [submitError, setSubmitError] = React.useState('');
    const [nameError, setNameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const regExpName = new RegExp('[^А-Яа-яA-Za-z- ]');

    function checkName(e) {
        const name = e.target.value;
        if (!regExpName.test(name)) {
            setNameError(false);
            setName(name)
        } else {
            setNameError(true);
            setName('');
        }
    }

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

    function onSubmit(e) {
        e.preventDefault();
        mainApi.register(name, email, password)
            .then(() => {
                mainApi.login(email, password)
                    .then((res) => {
                        setSubmitError('');
                        localStorage.setItem('token', res.token);
                        setCurrentUser(res.user);
                        setLoggedIn(true);
                        navigate('/movies');
                    })
                    .catch(err => {
                        return Promise.reject(err);
                    })
            })
            .catch(err => {
                setSubmitError(err);
                return Promise.reject(err);
            })
    }
    return (
    <main>
            <section className='signup' aria-label='Регистрация'>
                <div className="signup__count">
                    <Link className="signup__logo button"  to="/">
                        <img className="signup__logo-img" src={logo} alt="Логотип"/>
                    </Link>
                    <h3 className='signup__greeting'>Добро пожаловать!</h3>
                    <form className='signup__wrapper' name='register-form'>
                        <label className='signup__form-name'>Имя</label>
                        <input required
                               className='signup__name input'
                               minLength="5"
                               maxLength="12"
                               placeholder='Виталий'
                               onChange={checkName}
                        ></input>
                        <span className={`signup__name-error error ${nameError ? 'error_visible' : ''}`}>Поле "Имя" может содержать только латиницу, кириллицу, пробел или дефис</span>
                        <label className='signup__form-name '>E-mail</label>
                        <input required
                               className='signup__email input'
                               type='email'
                               placeholder='pochta@yandex.ru'
                               onChange={checkEmail}
                        />
                        <span className={`signup__email-error error ${emailError ? 'error_visible' : ''}`}>Введите валидный email</span>
                        <label className='signup__form-name'>Пароль</label>
                        <input required
                               className='signup__password input'
                               minLength="8"
                               maxLength="20"
                               placeholder='Пароль'
                               onChange={checkPassword}
                               type='password'
                        />
                        <span className={`signup__submit-error error ${submitError !== '' ? 'error_visible' : ''}`}>{submitError}</span>
                        <button className='signup__submit button'
                                disabled={!(nameError === false && emailError === false && passwordError === false && name !== '' && email !== '' && password !== '')}
                                type='submit'
                                onClick={onSubmit}>
                            Зарегистрироваться
                        </button>
                    </form>
                    <p className='signup__already-regitered'>
                        Уже зарегистрированы?
                        <Link className='sigup__to-signin button' to='/signin'>Войти</Link>
                    </p>
                </div>
            </section>
    </main>
    )
}
export default Register