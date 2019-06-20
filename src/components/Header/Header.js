import React from 'react';

// CSS
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <h1>
                    Hello, Chuck Norris fans!
                    <button 
                        title='Sign in to Chuck Norris Jokes'
                        type='button' 
                        onClick={this.props.toggleModal}>
                        <i className='fas fa-sign-in-alt'></i>
                    </button>
                </h1>
            </header>
        );
    }
}

export default Header;