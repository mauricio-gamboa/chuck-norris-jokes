import React from 'react';

class JokesList extends React.Component {
    render() {
        const {
            jokes
        } = this.props;

        if (!jokes.length) {
            return null;
        }

        return (
            <ul>
                {jokes.map(joke => <li
                    onClick={() => this.props.toogleFavorite(joke.id)}
                    key={joke.id}>{joke.joke}</li>)
                }
            </ul>
        );
    }
}

export default JokesList;
