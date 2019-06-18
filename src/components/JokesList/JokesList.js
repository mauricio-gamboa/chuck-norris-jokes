import React from 'react';

// Components
import FavoriteButton from '../FavoriteButton/FavoriteButton';

// CSS
import './JokesList.css';

class JokesList extends React.Component {
    render() {
        const {
            jokes
        } = this.props;

        if (!jokes.length) {
            return null;
        }

        return (
            <ul className="jokesWrapper">
                {jokes.map(joke => {
                    return (
                        <li
                            className="joke hoverForward"
                            key={joke.id}>
                            <p dangerouslySetInnerHTML={{__html: joke.joke}} />
                            <FavoriteButton
                                isSelected={joke.isFav}
                                handleClick={() => this.props.toogleFavorite(joke.id)} />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default JokesList;
