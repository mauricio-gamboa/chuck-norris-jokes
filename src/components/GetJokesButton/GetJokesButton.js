import React from 'react';

// CSS
import './GetJokesButton.css';

class GetJokesButton extends React.Component {
    render() {
        return (
            <button
                className="getJokesButton hoverBuzzOut"
                onClick={this.props.handleClick}>
                {this.props.children}
            </button>
        );
    }
}

export default GetJokesButton;
