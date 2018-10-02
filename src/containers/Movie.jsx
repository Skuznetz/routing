import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';

@connect(
    mapStateToProps,{fetchMovie}
)

function maoStateToProps(state,ownProps){
    return {
        movie: state.movie.info,
        leading: state.movie.isFatching,
        movieId: ownProps.params.id
    };
}


