import React from 'react';

// Components
import GetJokesButton from '../GetJokesButton/GetJokesButton'

// Services
import getJokes from '../../services/getJokes'

class Wrapper extends React.Component {
    constructor() {
        super();
        this.state = { jokes: [] };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <p>Hallo, Chuck Norris-fans!</p>
                <GetJokesButton callback={this.handleClick} />
            </div>
        );
    }

    handleClick() {
        getJokes().then(json => this.setState({
            jokes: json.value
        }));
    }
}

export default Wrapper;
