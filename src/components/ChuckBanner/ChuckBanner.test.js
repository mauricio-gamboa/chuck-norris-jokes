import React from 'react';
import ReactDOM from 'react-dom';
import ChuckBanner from './ChuckBanner';

it('renders without crashing (smoke test)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChuckBanner />, div);
    ReactDOM.unmountComponentAtNode(div);
});
