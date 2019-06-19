import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './Wrapper';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

test('renders without crashing (smoke test)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Wrapper />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('Wrapper', () => {
    test('constructor', () => {
        const component = create(<Wrapper />);
        const instance = component.getInstance();
        expect(instance.state.isTimerStarted).toBe(false);
    });

    describe('toggleFavorite', () => {
        let component;
        let instance;
        let testJokes;

        beforeEach(() => {
            component = shallow(<Wrapper />);
            instance = component.instance();
            testJokes = [
                { id: 1, isFav: true },
                { id: 2, isFav: false },
                { id: 3, isFav: false }
            ];
        });

        test('toggles the isFav flag to true', () => {
            instance.setState({
                jokes: testJokes
            });

            instance.toggleFavorite(2);
            expect(instance.state.jokes[1].isFav).toBe(true);
        });

        test('toggles the isFav flag to false', () => {
            instance.setState({
                jokes: testJokes
            });

            instance.toggleFavorite(1);
            expect(instance.state.jokes[0].isFav).toBe(false);
        });

        test('increments the favoriteCount value', () => {
            instance.setState({
                favoriteCount: 1,
                jokes: testJokes
            });

            instance.toggleFavorite(2);
            expect(instance.state.favoriteCount).toBe(2);
        });

        test('decreases the favoriteCount value', () => {
            instance.setState({
                favoriteCount: 1,
                jokes: testJokes
            });
            instance.toggleFavorite(1);
            expect(instance.state.favoriteCount).toBe(0);
        });

        test('does not call set state if the id is not found', () => {
            instance.setState = jest.fn();
            instance.toggleFavorite(5);
            expect(instance.setState).toHaveBeenCalledTimes(0);
        });

        test('calls set state if the id is found', () => {
            instance.setState({
                favoriteCount: 1,
                jokes: testJokes
            });
            instance.setState = jest.fn();
            instance.toggleFavorite(1);
            expect(instance.setState).toHaveBeenCalledTimes(1);
        });

        test('calls the saveInSession function when the state is updated', () => {
            instance.setState({
                favoriteCount: 1,
                jokes: testJokes
            });

            instance.saveInSession = jest.fn();
            instance.toggleFavorite(2);
            expect(instance.saveInSession).toHaveBeenCalledTimes(1);
        });
    });
});
