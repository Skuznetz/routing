import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';
import { isMovieFetching, getMovieInfo } from '../selectors';

import MovieInfo from '../components/MovieInfo.jsx';
import BackdropContainer from '../components/BackdropContainer.jsx';
import Loader from '../components/Loader.jsx';

@connect(
    mapStateToProps,{fetchMovie}
)
export default class Movie extends Component {
    componentWillMount() {
        const { movieId,fetchMovie } = this.props;

        fetchMovie(movieId);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.movieId !== this.props.movieId) {
            this.props.fetchMovie(nextProps.movieId);
        }
    }
    render() {
        const { movie, loading, children } = this.props;

        return (
            <Loader loading={loading}>
                <BackdropContainer backdropPath={movie.backdropPath}>
                    <MovieInfo {...movie} />
                </BackdropContainer>

                {children}
            </Loader>
        );
    }
}

function mapStateToProps(state,ownProps){
    return {
        movie: state.movie.info,
        leading: state.movie.isFatching,
        movieId: ownProps.params.id
    };
}


