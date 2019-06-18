import React from 'react';

// Components
import GetJokesButton from '../GetJokesButton/GetJokesButton'
import JokesList from '../JokesList/JokesList'

// Services
import getJokes from '../../services/getJokes'

class Wrapper extends React.Component {
    constructor() {
        super();
        this.state = { jokes: [] };

        // Bind the functions
        this.handleClick = this.handleClick.bind(this);
        this.toogleFavorite = this.toogleFavorite.bind(this);
    }

    render() {
        const {
            jokes
        } = this.state;

        const regularJokes = jokes.filter(joke => !!joke.isFav === false);
        const favoriteJokes = jokes.filter(joke => !!joke.isFav === true);
        const title = favoriteJokes.length ? 'Your favorite Chuck Norris quotes:' : '';

        return (
            <div>
                <p>Hallo, Chuck Norris-fans!</p>
                <GetJokesButton handleClick={this.handleClick} />
                <JokesList
                    jokes={regularJokes}
                    toogleFavorite={this.toogleFavorite} />
                {title && <p>{title}</p>}
                <JokesList
                    jokes={favoriteJokes}
                    toogleFavorite={this.toogleFavorite} />
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
            this.setState({ jokes: jokesCopy });
        }
    }
}

export default Wrapper;
