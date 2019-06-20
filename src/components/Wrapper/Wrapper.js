import React from 'react';

// Components
import Header from '../Header/Header'
import MultipleJokesButton from '../Buttons/MultipleJokesButton/MultipleJokesButton';
import SingleJokeButton from '../Buttons/SingleJokeButton/SingleJokeButton';
import JokesList from '../JokesList/JokesList';
import ChuckBanner from '../ChuckBanner/ChuckBanner';
import LoginModal from '../LoginModal/LoginModal'

// Services
import getJokes from '../../services/getJokes';

// Utils
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
    ADD_RANDOM_JOKE_TO_FAVORITES_TEXT,
    CHUCK_NORRIS_USER_KEY
} from '../../constants';

// CSS
import './Wrapper.css';

class Wrapper extends React.Component {
    constructor() {
        super();

        // Read favorited jokes from session storage
        const favoriteJokes = JSON.parse(getStorage(SESSION_STORAGE_KEY)) || [];
        const userName = this.getUserNameFromStorage();
        const isUserRecognized = !!userName || false;

        this.state = {
            jokes: [...favoriteJokes],
            favoriteCount: favoriteJokes.length,
            isTimerStarted: false,
            isModalOpened: false,
            isUserRecognized: isUserRecognized,
            userName: userName
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
        this.toggleModal = this.toggleModal.bind(this);
        this.loginSuccessCallback = this.loginSuccessCallback.bind(this);
    }

    render() {
        const regularJokes = this.getRegularJokes();
        const favoriteJokes = this.getFavoriteJokes();

        return (
            <div>
                {this.state.isModalOpened &&
                    <LoginModal
                        successCallback={this.loginSuccessCallback}
                        toggleModal={this.toggleModal} />
                }

                <Header
                    toggleModal={this.toggleModal}
                    isUserRecognized={this.state.isUserRecognized}
                    userName={this.state.userName} />

                {this.state.isUserRecognized &&
                    <div>
                        <MultipleJokesButton
                            handleClick={this.getMultipleJokes}>
                            <b>Click here</b> to get <b>10</b> random <b>Chuck Norris</b> jokes!
                        </MultipleJokesButton>

                        <SingleJokeButton
                            handleClick={this.state.isTimerStarted ? this.stopTimer : this.startTimer}>
                            {`${this.state.isTimerStarted ? STOP_TIMER_TEXT : ADD_RANDOM_JOKE_TO_FAVORITES_TEXT}`}
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
                    </div>
                }

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

        const {
            jokes
        } = this.state;

        getJokes(1).then(json => {
            const joke = json.value;

            if (joke && joke.length) {
                const index = jokes.findIndex(oneJoke => oneJoke.id === joke[0].id);

                if (index === -1) {
                    joke[0].isFav = true

                    this.setState(prevState => ({
                        jokes: [...prevState.jokes, ...joke],
                        favoriteCount: prevState.favoriteCount + 1
                    }), this.saveInSession);
                }
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

    toggleModal() {
        this.setState(prevState => ({
            isModalOpened: !prevState.isModalOpened
        }));
    }

    loginSuccessCallback() {
        this.setState({
            isUserRecognized: true,
            userName: this.getUserNameFromStorage()
        });
    }

    getUserNameFromStorage() {
        return JSON.parse(getStorage(CHUCK_NORRIS_USER_KEY)) || '';
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}

export default Wrapper;
