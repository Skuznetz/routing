import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchMovies } from '../actions';
import SearchBox from '../components/SearchBox.jsx';
import MovieGrid from '../components/MovieGrid.jsx';


export default class Search extends Component {
    render() {
        return (
            <div>
                <SearchBox />
                <MovieGrid />
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        movies: state.movies.items,
        loading: state.movies.isFetching
    };
}



