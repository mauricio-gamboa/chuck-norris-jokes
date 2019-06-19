import React from 'react';
import ReactDOM from 'react-dom';
import MultipleJokesButton from './MultipleJokesButton';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MultipleJokesButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});
