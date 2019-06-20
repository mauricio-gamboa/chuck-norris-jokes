import React from 'react';

// CSS
import './FavoriteButton.css';

// Constants
import {
    MAX_JOKES_TEXT,
    REMOVE_FROM_FAVORITES_TEXT,
    ADD_TO_FAVORITES_TEXT
} from '../../../constants';

function FavoriteButton(props) {
    const {
        isSelected,
        isDisabled,
        handleClick
    } = props;

    let title = '';

    if (isSelected) {
        title = REMOVE_FROM_FAVORITES_TEXT;
    } else if (isDisabled) {
        title = MAX_JOKES_TEXT;
    } else {
        title = ADD_TO_FAVORITES_TEXT;
    }

    return (
        <button
            className={`favoriteButton ${isSelected ? 'selected' : ''}`}
            type='button'
            disabled={isDisabled}
            title={title}
            onClick={() => handleClick()}>
            <i className='fas fa-heart'></i>
        </button>
    );
}

export default FavoriteButton;