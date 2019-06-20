import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteButton from './FavoriteButton';

it('renders without crashing (smoke test)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FavoriteButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});
