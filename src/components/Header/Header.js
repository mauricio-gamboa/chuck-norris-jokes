import React from 'react';

// CSS
import './Header.css';

function Header(props) {
    const {
        isUserRecognized,
        userName,
        toggleModal,
        signOut
    } = props;

    return (
        <header className='header'>
            <h1>
                {`Hello, ${isUserRecognized ? userName : 'Chuck Norris fans'}!`}
                {!isUserRecognized &&
                    <button
                        title='Sign In to Chuck Norris Jokes'
                        type='button'
                        onClick={toggleModal}>
                        <i className='fas fa-sign-in-alt'></i>
                    </button>
                }

                {isUserRecognized &&
                    <button
                        title='Sign Out of Chuck Norris Jokes'
                        type='button'
                        onClick={() => signOut()}>
                        <i className='fas fa-sign-out-alt'></i>
                    </button>
                }
            </h1>
        </header>
    );
}

export default Header;