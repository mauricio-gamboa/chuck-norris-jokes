import {
    RANDOM_JOKES_API_URL
} from '../constants'

async function getJokes(number) {
    const response = await fetch(`${RANDOM_JOKES_API_URL}${number}`);
    const json = await response.json();
    return json;
}

export default getJokes;