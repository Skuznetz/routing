import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';

import MovieInfo from '../components/MovieInfo.jsx';
import BackdropContainer from '../components/BackdropContainer.jsx';
import Loader from '../components/Loader.jsx';

@connect(
    mapStateToProps,{fetchMovie}
)
export default class Movie extends Component {
    componentDidMount() {
        const { movieId,fetchMovie } = this.props;

        this.props.fetchMovie(movieId);
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

function maoStateToProps(state,ownProps){
    return {
        movie: state.movie.info,
        leading: state.movie.isFatching,
        movieId: ownProps.params.id
    };
}


