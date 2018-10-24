import { createSelector } from 'reselect';

export const isLoggedIn = state => state.isLoggedIn;
export const isLoggingIn = state => state.session.isLoggingIn;
export const getAuthError = state => state.session.error;

export const getLocation = state => state.routing.locationBeforeTransitions;

export const isMovieFetching = state => state.movie.isFetching;
export const getMovieInfo = state => state.movie.info;

export const isMoviesFetching = state => state.movies.isFetching;
export const getSearchMovies = state => state.movies.items;


