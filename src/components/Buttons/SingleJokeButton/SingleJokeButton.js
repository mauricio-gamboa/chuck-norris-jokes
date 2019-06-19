import React from 'react';

// Components
import MainButton from '../MainButton/MainButton';

class SingleJokeButton extends React.Component {
    render() {
        return (
            <MainButton handleClick={this.props.handleClick}>
                <i className="far fa-clock"></i>
                {' '}
                <i className="far fa-surprise"></i>
                {' '}
                <i className="far fa-surprise"></i>
                {' '}
                {this.props.children}
                {' '}
                <i className="far fa-surprise"></i>
                {' '}
                <i className="far fa-surprise"></i>
                {' '}
                <i className="far fa-clock"></i>
            </MainButton>
        );
    }
}

export default SingleJokeButton;