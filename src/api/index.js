import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const API_PREFIX = 'https://api.themoviedb.org/3';
const API_KEY = '8c9f0b25d628dc3a96bcc112d2c82e63';

export function searchMovies(query) {
    const params = {
        query,
        api_key: API_KEY,
    };

    return axios.get(`${API_PREFIX}/search/movie`, { params })
        .then(data => camelcaseKeys(data, { deep: true }));
}

export function fetchMovie(id) {
    const params = {
        api_key: API_KEY
    };

    return axios.get(`${API_PREFIX}/movie/${id}`, { params })
        .then(data => camelcaseKeys(data, { deep: true }));
}

const USERS = [{
    login: 'max',
    name: 'Max',
    avatar: 'https://pbs.twimg.com/profile_images/80699901/max_400x400.jpg',
    password: 'qwerty12345'
}, {
    login: 'kotik9000',
    name: 'Marysya',
    avatar: 'https://pbs.twimg.com/profile_images/668830888499789824/Yf2U7LjB.jpg',
    password: '12345678'
}];

export default {
    searchMovies,
    fetchMovie
};
