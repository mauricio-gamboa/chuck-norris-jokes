import React from 'react';

// Components
import FavoriteButton from '../Buttons/FavoriteButton/FavoriteButton';

// CSS
import './JokesList.css';

function JokesList(props) {
    const {
        jokes,
        isDisabled,
        toggleFavorite
    } = props;

    if (!jokes.length) {
        return null;
    }

    return (
        <ul className='jokesWrapper'>
            {jokes.map(joke => {
                return (
                    <li
                        className='joke hoverForward'
                        key={joke.id}>
                        
                        <p dangerouslySetInnerHTML={{ __html: joke.joke }} />
                        
                        <FavoriteButton
                            isDisabled={isDisabled}
                            isSelected={joke.isFav}
                            handleClick={() => toggleFavorite(joke.id)} />
                    </li>
                )
            })}
        </ul>
    );
}

export default JokesList;
