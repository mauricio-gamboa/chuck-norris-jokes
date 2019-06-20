import React from 'react';

// Components
import MainButton from '../MainButton/MainButton';

function MultipleJokesButton(props) {
    const {
        handleClick,
        children
    } = props;

    return (
        <MainButton handleClick={handleClick}>
            <i className='fas fa-arrow-right'></i>
            {' '}
            <i className='far fa-smile-wink'></i>
            {' '}
            {children}
            {' '}
            <i className='far fa-smile-wink'></i>
            {' '}
            <i className='fas fa-arrow-left'></i>
        </MainButton>
    );
}

export default MultipleJokesButton;