import React from 'react';

// CSS
import './Header.css';

class Header extends React.Component {
    render() {
        const {
            isUserRecognized,
            userName
        } = this.props;

        return (
            <header className='header'>
                <h1>
                    {`Hello, ${isUserRecognized ? userName : 'Chuck Norris fans'}!`}
                    {!isUserRecognized &&
                        <button
                            title='Sign in to Chuck Norris Jokes'
                            type='button'
                            onClick={this.props.toggleModal}>
                            <i className='fas fa-sign-in-alt'></i>
                        </button>
                    }
                </h1>
            </header>
        );
    }
}

export default Header;