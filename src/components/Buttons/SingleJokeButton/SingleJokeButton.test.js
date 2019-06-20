import React from 'react';
import ReactDOM from 'react-dom';
import SingleJokeButton from './SingleJokeButton';

it('renders without crashing (smoke test)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SingleJokeButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});
