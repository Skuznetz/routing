import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';

@connect(
    mapStateToProps,{fetchMovie}
)
export default class Movie extends Component {
      componentDidMount() {
        const { movieId,fetchMovie } = this.props;

        this.props.fetchMovie(movieId);
    }
}
function maoStateToProps(state,ownProps){
    return {
        movie: state.movie.info,
        leading: state.movie.isFatching,
        movieId: ownProps.params.id
    };
}


