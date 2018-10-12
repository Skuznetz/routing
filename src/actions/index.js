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

export const fetchMovieRequest = id => ({
    type: FETCH_MOVIE_REQUEST,
    id
});

export const fetchMovieSuccess = ({ data }) => ({
    movie: data,
    type: FETCH_MOVIE_SUCCESS
});

export const searchMovies = query => dispatch => {
    dispatch(fetchMoviesRequest(query));

    return api.searchMovies(query)
        .then(data => dispatch(fetchMoviesSuccess(data)));
}



export const fetchMovie = id => dispatch => {
    dispatch(fetchMovieRequest(id));

    return api.fetchMovie(id)
        .then(data => dispatch(fetchMovieSuccess(data)));
}
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const authSuccess = (token, user) => {
    saveSession(token);

    return {
        user: user,
        token: token,
        type: AUTH_SUCCESS
    };
}

export const auth = (login, password) => dispatch => {
    dispatch({
        type: AUTH_REQUEST,
    });

    return api.auth(login, password)
        .then(
            data => (
                dispatch(authSuccess(data.token, data.user))
            ),
            error => (
                dispatch({
                    error,
                    type: AUTH_FAILURE
                })
            ),
        );
};