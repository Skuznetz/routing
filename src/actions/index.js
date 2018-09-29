import api from '../api';


export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

export const fetchMoviesRequest = query => ({
    type: FETCH_MOVIES_REQUEST,
    query
});

export const fetchMoviesSuccess = ({ data }) => ({
    ...data,
    type: FETCH_MOVIES_SUCCESS
});

export const searchMovies = query => dispatch => {
    dispatch(fetchMoviesRequest(query));

    return api.searchMovies(query)
        .then(data => dispatch(fetchMoviesSuccess(data)));
}

// export const fetchMoreMovies = ({ query, page }) => dispatch => {
//     dispatch(fetchMoviesRequest(query));

//     return api.searchMovies(query)
//         .then(data => dispatch(fetchMoviesSuccess(data)));
// }