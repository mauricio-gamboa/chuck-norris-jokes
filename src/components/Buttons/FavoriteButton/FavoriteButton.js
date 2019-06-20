import React from 'react';

// CSS
import './FavoriteButton.css';

// Constants
import {
    MAX_JOKES_TEXT,
    REMOVE_FROM_FAVORITES_TEXT,
    ADD_TO_FAVORITES_TEXT
} from '../../../constants';

class FavoriteButton extends React.Component {
    render() {
        let title = '';

        if (this.props.isSelected) {
            title = REMOVE_FROM_FAVORITES_TEXT;
        } else if (this.props.isDisabled) {
            title = MAX_JOKES_TEXT;
        } else {
            title = ADD_TO_FAVORITES_TEXT;
        }

        return (
            <button
                className={`favoriteButton ${this.props.isSelected ? 'selected' : ''}`}
                type='button'
                disabled={this.props.isDisabled}
                title={title}
                onClick={() => this.props.handleClick()}>
                <i className='fas fa-heart'></i>
            </button>
        );
    }
}

export default FavoriteButton;