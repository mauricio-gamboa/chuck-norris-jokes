import {
    RANDOM_JOKES_API_URL,
    NUMBER_OF_JOKES
} from '../constants'

async function getJokes() {
    const response = await fetch(`${RANDOM_JOKES_API_URL}${NUMBER_OF_JOKES}`);
    const json = await response.json();
    return json;
}

export default getJokes;