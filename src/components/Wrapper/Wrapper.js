import React from 'react';

// Components
import MultipleJokesButton from '../Buttons/MultipleJokesButton/MultipleJokesButton';
import SingleJokeButton from '../Buttons/SingleJokeButton/SingleJokeButton';
import JokesList from '../JokesList/JokesList';
import ChuckBanner from '../ChuckBanner/ChuckBanner';

// Services
import getJokes from '../../services/getJokes';
import {
    setStorage,
    getStorage
} from '../../utils/store';

// Constants
import {
    SESSION_STORAGE_KEY,
    FAVORITE_JOKES_TEXT,
    MAX_JOKES_TEXT,
    RANDOM_JOKES_TEXT,
    STOP_TIMER_TEXT,
    ADD_RANDOM_JOKE_TO_FAVORITES_TEXT
} from '../../constants';

// CSS
import './Wrapper.css';

class Wrapper extends React.Component {
    constructor() {
        super();

        // Read favorited jokes from session storage
        const favoriteJokes = getStorage(SESSION_STORAGE_KEY);

        this.state = {
            jokes: [...favoriteJokes],
            favoriteCount: favoriteJokes.length,
            isTimerStarted: false
        };

        // Bind the functions
        this.getMultipleJokes = this.getMultipleJokes.bind(this);
        this.getSingleJoke = this.getSingleJoke.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
        this.saveInSession = this.saveInSession.bind(this);
        this.getFavoriteJokes = this.getFavoriteJokes.bind(this);
        this.getRegularJokes = this.getRegularJokes.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    render() {
        const regularJokes = this.getRegularJokes();
        const favoriteJokes = this.getFavoriteJokes();

        return (
            <div>
                <h1>Hello, Chuck Norris fans!</h1>

                <MultipleJokesButton
                    handleClick={this.getMultipleJokes}>
                    <b>Click here</b> to get 10 random <b>Chuck Norris</b> jokes!
                </MultipleJokesButton>

                <SingleJokeButton
                    handleClick={this.state.isTimerStarted ? this.stopTimer : this.startTimer}>
                    {`${this.props.isTimerStarted ? STOP_TIMER_TEXT : ADD_RANDOM_JOKE_TO_FAVORITES_TEXT}`}
                </SingleJokeButton>

                {regularJokes.length > 0 &&
                    <h2>{RANDOM_JOKES_TEXT}</h2>
                }

                <JokesList
                    isDisabled={this.state.favoriteCount === 10}
                    jokes={regularJokes}
                    toggleFavorite={this.toggleFavorite} />

                {favoriteJokes.length > 0 &&
                    <h2>{FAVORITE_JOKES_TEXT}
                        <span>{this.state.favoriteCount === 10 ? MAX_JOKES_TEXT : ''}</span>
                    </h2>
                }

                <JokesList
                    jokes={favoriteJokes}
                    toggleFavorite={this.toggleFavorite} />

                <ChuckBanner />
            </div>
        );
    }

    getMultipleJokes() {
        getJokes(10).then(json => this.setState(prevState => ({
            jokes: [...prevState.jokes, ...json.value]
        })));
    }

    getSingleJoke() {
        if (this.state.favoriteCount === 10) {
            this.stopTimer();
            return;
        }

        getJokes(1).then(json => {
            const joke = json.value;

            if (joke && joke.length) {
                joke[0].isFav = true

                this.setState(prevState => ({
                    jokes: [...prevState.jokes, ...joke],
                    favoriteCount: prevState.favoriteCount + 1
                }), this.saveInSession);
            }
        });
    }

    toggleFavorite(id) {
        const {
            jokes
        } = this.state;

        const index = jokes.findIndex(joke => joke.id === id);

        if (index !== -1) {
            const jokesCopy = [...jokes];
            const joke = jokesCopy[index];
            joke.isFav = !joke.isFav;

            // Updates the state and saves them into session storage
            this.setState(prevState => ({
                jokes: jokesCopy,
                favoriteCount: joke.isFav ?
                    prevState.favoriteCount + 1 : prevState.favoriteCount - 1
            }), this.saveInSession);
        }
    }

    saveInSession() {
        const favoriteJokes = this.getFavoriteJokes();
        setStorage(SESSION_STORAGE_KEY, favoriteJokes);
    }

    getFavoriteJokes() {
        return this.state.jokes.filter(joke => !!joke.isFav === true);
    }

    getRegularJokes() {
        return this.state.jokes.filter(joke => !!joke.isFav === false);
    }

    startTimer() {
        this.setState({
            isTimerStarted: true
        }, () => {
            this.intervalId = setInterval(this.getSingleJoke, 5000);
        });
    }

    stopTimer() {
        this.setState({
            isTimerStarted: false
        }, clearInterval(this.intervalId));
    }
}

export default Wrapper;
