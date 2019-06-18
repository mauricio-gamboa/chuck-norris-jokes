import React from 'react';

class GetJokesButton extends React.Component {
    render() {
        return (
            <button
                className="getJokesButton"
                onClick={this.props.callback}>
                Get 10 random Chuck Norris Jokes
            </button>
        );
    }
}

export default GetJokesButton;
