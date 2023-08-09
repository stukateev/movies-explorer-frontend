import './Profile.css'
import React, {useContext} from 'react';
import { CurrentUserContext } from '../../context/currentUserContext';
import isEmail from 'validator/lib/isEmail';
import { mainApi } from '../../utils/MainApi';
import { regExpName } from '../../utils/constants';
import {Link} from "react-router-dom";

function Profile(props) {
    const currentUser = useContext(CurrentUserContext).currentUser;
    const { setCurrentUser, logOut } = props;
    const {name, email} = React.useContext(CurrentUserContext);
    const [newName, setNewName] = React.useState(name);
    const [newEmail, setNewEmail] = React.useState(email);
    const [nameError, setNameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [editedValue, setEditedValue] = React.useState(false);

    function checkName(e) {
        const name = e.target.value
        if (!regExpName.test(name)) {
            if(name!==currentUser.name){
                setEditedValue(true)
            } else {
                setEditedValue(false)
            }
            setNameError(false);
            setNewName(name)

        } else {
            setNameError(true);
        }
    }
    function checkEmail(e) {
        const email = e.target.value;
        if (isEmail(email)) {
            if(email!==currentUser.email){
                setEditedValue(true)
            } else {
                setEditedValue(false)
            }
            setEmailError(false);
            setNewEmail(email);
        } else {
            setEmailError(true);
        }
    }
    function patchUser(e) {
        e.preventDefault();
        mainApi.patchUser(newName, newEmail)
            .then(res => {
                setCurrentUser(res);
                console.log(res)
                setEditedValue(false)
            })
            .catch(err => {
                if (err === 'Ошибка 401') {
                    signOut();
                }
                return Promise.reject(err)
            })
    }

    function signOut() {
        logOut();
        setNewName('');
        setNewEmail('');
        setNameError(false);
        setEmailError(false);
        setEditedValue(false)
    }
    return(
    <main>
            <section className='profile' aria-label='Профиль'>
                <h1 className='profile__greeting'>Привет, { currentUser.name }</h1>
                <form className="profile__form">
                    <div className='profile__name-wrapper'>
                        <label className='profile__name profile__data__font ' >Имя</label>
                        <input required
                               defaultValue={ currentUser.name }
                               onChange={checkName}
                               minLength="5"
                               maxLength="22"
                               className='profile__username profile__data__font profile__input'>
                        </input>
                        <span className={`profile__username-error profile__error ${nameError ? 'visible' : ''}`}>Разрешены только буквы, пробелы или дефисы</span>
                    </div>
                    <div className='profile__email-wrapper'>
                        <label className='profile__email profile__data__font'>E-mail</label>
                        <input required
                               type='email'
                               className='profile__useremail profile__data__font profile__input'
                               defaultValue={ currentUser.email}
                               onChange={checkEmail}>
                        </input>
                        <span className={`profile__email-error profile__error ${emailError ? 'visible' : ''}`}>Введите валидный email</span>
                    </div>
                    <button className='profile__user-info-edit profile__button button'
                            type='button'
                            onClick={patchUser}
                            disabled={!((newName !== name || newEmail !== email) && emailError === false && nameError === false && newName !== '' && editedValue)}>Редактировать</button>
                </form>
                <Link className='profile__exit profile__button button' onClick={signOut} to="/">Выйти из аккаунта</Link>
            </section>
    </main>
    )
}
export default Profile