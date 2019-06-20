import React from 'react';

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

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: []
        };

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.isUserNameValid = this.isUserNameValid.bind(this);
        this.isPasswordValid = this.isPasswordValid.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    render() {
        return (
            <form
                noValidate
                onSubmit={e => this.signIn(e)}>
                <div className='box'>
                    <input
                        onChange={this.handleUserNameChange}
                        type='text'
                        name='username'
                        value={this.state.username}
                        placeholder='User Name' />
                    <input
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                        type='password'
                        name='password'
                        autoComplete='password'
                        placeholder='Password' />

                    {this.state.errors.length > 0 &&
                        <ul className='errorsList'>
                            {this.state.errors.map((error, index) => {
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

    signIn(event) {
        event.preventDefault();

        const isFormValid = this.isUserNameValid() &&
            this.isPasswordValid() &&
            !this.state.errors.length;

        if (isFormValid) {
            setStorage(CHUCK_NORRIS_USER_KEY, this.state.username);
            this.props.successCallback();
            this.props.toggleModal();
        }
    }

    isUserNameValid() {
        if (!this.state.username) {
            this.setState({
                errors: ['User Name must not be empty.']
            });

            return false
        }

        return true;
    }

    isPasswordValid() {
        if (!this.state.password) {
            this.setState({
                errors: getPasswordErrors(this.state.password)
            });

            return false
        }

        return true;
    }

    handleUserNameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange(event) {
        const password = event.target.value;

        this.setState({
            password: password,
            errors: getPasswordErrors(password)
        });
    }
}

export default LoginForm;