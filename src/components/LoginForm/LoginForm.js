import React from 'react';

// Components
import MainButton from '../Buttons/MainButton/MainButton'

// Utils
import { getPasswordErrors } from '../../utils/password';

// CSS
import './LoginForm.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            isFormValid: false,
            errors: []
        };

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.isUserNameValid = this.isUserNameValid.bind(this);
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
                        placeholder='User name' />
                    <input
                        onChange={this.handlePasswordChange}
                        value={this.state.name}
                        type='password'
                        name='password'
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

    signIn(e) {
        e.preventDefault();

        const isFormValid = this.isUserNameValid() &&
            this.state.password &&
            !this.state.errors.length;

        if (isFormValid) {
            console.log('SIGN IN USER');
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

    handleUserNameChange(event) {
        this.setState({
            userName: event.target.value,
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