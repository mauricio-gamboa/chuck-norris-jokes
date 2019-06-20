import React from 'react';

// CSS
import './MainButton.css';

class MainButton extends React.Component {
    render() {
        return (
            <button
                type={this.props.type ? this.props.type : 'button'}
                className='mainButton hoverBuzzOut'
                onClick={this.props.handleClick}>
                {this.props.children}
            </button>
        );
    }
}

export default MainButton;
