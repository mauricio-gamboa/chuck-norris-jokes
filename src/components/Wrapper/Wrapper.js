import React from 'react';

// Components
import GetJokesButton from '../GetJokesButton/GetJokesButton';
import JokesList from '../JokesList/JokesList';
import ChuckBanner from '../ChuckBanner/ChuckBanner';

// Services
import getJokes from '../../services/getJokes';
import {
    setStorage,
    getStorage
} from '../../services/store';

// Constants
import {
    SESSION_STORAGE_KEY,
    FAVORITE_JOKES_TEXT,
    MAX_JOKES_TEXT
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
            favoriteCount: favoriteJokes.length
        };

        // Bind the functions
        this.handleClick = this.handleClick.bind(this);
        this.toogleFavorite = this.toogleFavorite.bind(this);
        this.saveInSession = this.saveInSession.bind(this);
        this.getFavoriteJokes = this.getFavoriteJokes.bind(this);
        this.getRegularJokes = this.getRegularJokes.bind(this);
    }

    render() {
        const regularJokes = this.getRegularJokes();
        const favoriteJokes = this.getFavoriteJokes();
        const title = favoriteJokes.length ? FAVORITE_JOKES_TEXT : '';

        return (
            <div>
                <h1>Hallo, Chuck Norris-fans!</h1>

                <GetJokesButton handleClick={this.handleClick} />

                <JokesList
                    isDisabled={this.state.favoriteCount === 10}
                    jokes={regularJokes}
                    toogleFavorite={this.toogleFavorite} />

                {title &&
                    <h2>{title}
                        <span>{this.state.favoriteCount === 10 ? MAX_JOKES_TEXT : ''}</span>
                    </h2>
                }

                <JokesList
                    jokes={favoriteJokes}
                    toogleFavorite={this.toogleFavorite} />

                <ChuckBanner />
            </div>
        );
    }

    handleClick() {
        getJokes().then(json => this.setState(prevState => ({
            jokes: [...prevState.jokes, ...json.value]
        })));
    }

    toogleFavorite(id) {
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
}

export default Wrapper;
