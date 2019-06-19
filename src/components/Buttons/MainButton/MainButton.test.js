import React from 'react';
import ReactDOM from 'react-dom';
import MainButton from './MainButton';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});
