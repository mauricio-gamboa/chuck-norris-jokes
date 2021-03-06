import React from 'react';
import ReactDOM from 'react-dom';
import JokesList from './JokesList';

it('renders without crashing (smoke test)', () => {
    const jokes = [{ id: 10 }, { id: 20 }];
    const div = document.createElement('div');
    ReactDOM.render(<JokesList jokes={jokes} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
