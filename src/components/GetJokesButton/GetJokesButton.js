import React from 'react';

// CSS
import './GetJokesButton.css';

class GetJokesButton extends React.Component {
    render() {
        return (
            <button
                className="getJokesButton hoverBuzzOut"
                onClick={this.props.handleClick}>
                <i className="far fa-smile-wink"></i>
                {' '}
                <i className="far fa-smile-wink"></i>
                {' '}
                Click me to get 10 random <b>Chuck Norris</b> Jokes!
                {' '}
                <i className="far fa-smile-wink"></i>
                {' '}
                <i className="far fa-smile-wink"></i>
            </button>
        );
    }
}

export default GetJokesButton;
