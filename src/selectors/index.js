import { createSelector } from 'reselect';

export const isLoggedIn = state => state.isLoggedIn;
export const isLoggingIn = state => state.session.isLoggingIn;
export const getAuthError = state => state.session.error;

export const getLocation = state => state.routing.locationBeforeTransitions;

export const getNextLocation = createSelector(
    getLocation,
    location => location.state.nextLocation
);

export const getQuery = createSelector(
    getLocation,
    location => location.query
);

export const getMoviesSearchQuery = createSelector(
    getQuery,
    query => query.search
);
export const isMovieFetching = state => state.movie.isFetching;
export const getMovieInfo = state => state.movie.info;

export const isMoviesFetching = state => state.movies.isFetching;
export const getSearchMovies = state => state.movies.items;

export const getSearchMovieCount = createSelector(
    getSearchMovies,
    movies => movies.length
);

export const getSearchMoviesVoteAverage = createSelector(
    getSearchMovies,
    getSearchMovieCount,
    (movies, count) => movies.reduce((sum, movie) => sum + movie.voteAverage, 0) / count
);

