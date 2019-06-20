import React, { useState } from 'react';

// Components
import MainButton from '../Buttons/MainButton/MainButton'

// Utils
import { getPasswordErrors } from '../../utils/password';
import { setStorage } from '../../utils/store';

// CSS
import './LoginForm.css';

// Constants
import {
    CHUCK_NORRIS_USER_KEY
} from '../../constants';

function LoginForm(props) {
    const {
        successCallback,
        toggleModal
    } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleUserNameChange = event => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = event => {
        const password = event.target.value;
        setPassword(password);
        setErrors(getPasswordErrors(password));
    };

    const isUserNameValid = () => {
        if (!username) {
            setErrors(['User Name must not be empty.']);
            return false;
        }

        return true;
    };

    const isPasswordValid = () => {
        if (!password) {
            setErrors(getPasswordErrors(password))
            return false;
        }

        return true;
    };

    const signIn = (event) => {
        event.preventDefault();

        const isFormValid = isUserNameValid() && isPasswordValid();

        if (isFormValid) {
            setStorage(CHUCK_NORRIS_USER_KEY, username);
            successCallback();
            toggleModal();
        }
    };

    return (
        <form
            noValidate
            onSubmit={signIn}>
            <div className='box'>
                <input
                    onChange={handleUserNameChange}
                    type='text'
                    name='username'
                    value={username}
                    placeholder='User Name' />
                <input
                    onChange={handlePasswordChange}
                    value={password}
                    type='password'
                    name='password'
                    autoComplete='password'
                    placeholder='Password' />

                {errors.length > 0 &&
                    <ul className='errorsList'>
                        {errors.map((error, index) => {
                            return (
                                <li key={index}>
                                    {`- ${error}`}
                                </li>
                            )
                        })}
                    </ul>
                }

                <MainButton type='submit'>
                    <b>Sign In</b> {' '} <i className='fas fa-sign-in-alt'></i>
                </MainButton>
            </div>
        </form>
    );
}

export default LoginForm;