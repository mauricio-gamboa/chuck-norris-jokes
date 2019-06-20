import React from 'react';

// CSS
import './LoginModal.css';

// Components
import LoginForm from '../LoginForm/LoginForm'

class LoginModal extends React.Component {
    render() {
        return (
            <div className='loginModal'>
                <div className='modalWrapper'>
                    <header>
                        <h3>Hey there, sign in to Chuck Norris Jokes!</h3>
                        <button
                            className='closeModal'
                            type='button'
                            onClick={this.props.toggleModal}>
                            <i className='fas fa-times'></i>
                        </button>
                    </header>
                    <LoginForm />
                </div>
            </div>
        );
    }

    componentDidMount() {
        document.body.classList.add('openModal');
    }

    componentWillUnmount() {
        document.body.classList.remove('openModal');
    }
}

export default LoginModal;