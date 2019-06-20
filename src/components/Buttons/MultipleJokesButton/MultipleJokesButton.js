import React from 'react';

// Components
import MainButton from '../MainButton/MainButton';

class MultipleJokesButton extends React.Component {
    render() {
        return (
            <MainButton handleClick={this.props.handleClick}>
                <i className='fas fa-arrow-right'></i>
                {' '}
                <i className='far fa-smile-wink'></i>
                {' '}
                <i className='far fa-smile-wink'></i>
                {' '}
                {this.props.children}
                {' '}
                <i className='far fa-smile-wink'></i>
                {' '}
                <i className='far fa-smile-wink'></i>
                {' '}
                <i className='fas fa-arrow-left'></i>
            </MainButton>
        );
    }
}

export default MultipleJokesButton;