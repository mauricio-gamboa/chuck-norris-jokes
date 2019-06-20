import React, { useEffect } from 'react';

// CSS
import './LoginModal.css';

// Components
import LoginForm from '../LoginForm/LoginForm'

function LoginModal(props) {
    const {
        toggleModal,
        successCallback
    } = props;

    useEffect(() => {
        document.body.classList.add('openModal');

        return () => {
            document.body.classList.remove('openModal');
        }
    });

    return (
        <div className='loginModal'>
            <div className='modalWrapper'>
                <header>
                    <h3>Hey there, sign in to Chuck Norris Jokes!</h3>
                    <button
                        className='closeModal'
                        type='button'
                        onClick={toggleModal}>
                        <i className='fas fa-times'></i>
                    </button>
                </header>
                <LoginForm
                    successCallback={successCallback}
                    toggleModal={toggleModal} />
            </div>
        </div>
    );
}

export default LoginModal;