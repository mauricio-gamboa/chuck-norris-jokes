import React from 'react';

// Components
import GetJokesButton from '../GetJokesButton/GetJokesButton';
import JokesList from '../JokesList/JokesList';
import ChuckBanner from '../ChuckBanner/ChuckBanner';

// Services
import getJokes from '../../services/getJokes';

// Constants
import { SESSION_STORAGE_KEY } from '../../constants';

class Wrapper extends React.Component {
    constructor() {
        super();

        const favoriteJokes = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY)) || [];

        this.state = { jokes: [...favoriteJokes] };

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
        const title = favoriteJokes.length ? 'Your favorite Chuck Norris jokes' : '';

        return (
            <div>
                <h1>Hallo, Chuck Norris-fans!</h1>
                <GetJokesButton handleClick={this.handleClick} />
                <JokesList
                    jokes={regularJokes}
                    toogleFavorite={this.toogleFavorite} />
                {title && <h2>{title}</h2>}
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
            joke.isFav = !jokes[index].isFav;

            // Updates the state and saves them into session storage
            this.setState({
                jokes: jokesCopy
            }, this.saveInSession);
        }
    }

    saveInSession() {
        const favoriteJokes = this.getFavoriteJokes();
        sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(favoriteJokes));
    }

    getFavoriteJokes() {
        return this.state.jokes.filter(joke => !!joke.isFav === true);
    }

    getRegularJokes() {
        return this.state.jokes.filter(joke => !!joke.isFav === false);
    }
}

export default Wrapper;
