import React from 'react';

// CSS
import './FavoriteButton.css';

class FavoriteButton extends React.Component {
    render() {
        return (
            <button
                title={`${this.props.isSelected ? 'Remove from favorites.' : 'Add to favorites.'}`}
                className={`favoriteButton ${this.props.isSelected ? 'selected' : ''}`}
                onClick={() => this.props.handleClick()}>
                <i className="fas fa-heart"></i>
            </button>
        );
    }
}

export default FavoriteButton;