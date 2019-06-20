import React from 'react';

// CSS
import './MainButton.css';

function MainButton(props) {
    const {
        type,
        handleClick,
        children
    } = props;

    return (
        <button
            type={type ? type : 'button'}
            className='mainButton hoverBuzzOut'
            onClick={handleClick}>
            {children}
        </button>
    );
}

export default MainButton;
