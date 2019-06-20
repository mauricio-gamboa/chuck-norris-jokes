import React from 'react';

// Components
import MainButton from '../MainButton/MainButton';

function SingleJokeButton(props) {
    const {
        handleClick,
        children
    } = props;

    return (
        <MainButton handleClick={handleClick}>
            <i className='far fa-clock'></i>
            {' '}
            <i className='far fa-surprise'></i>
            {' '}
            {children}
            {' '}
            <i className='far fa-surprise'></i>
            {' '}
            <i className='far fa-clock'></i>
        </MainButton>
    );
}

export default SingleJokeButton;