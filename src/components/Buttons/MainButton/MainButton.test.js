import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MainButton from './MainButton';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('MainButton', () => {
    let component;
    let handleClickMock;
    const text = 'test text';

    beforeEach(() => {
        handleClickMock = jest.fn();
        component = shallow(<MainButton handleClick={handleClickMock}>{text}</MainButton>);
    });

    test('calls the handleClick prop on click', () => {
        component.find('button').simulate('click');
        expect(handleClickMock).toHaveBeenCalledTimes(1);
    });

    test('contains the correct text', () => {
        expect(component.text()).toEqual(text);
    });
});
