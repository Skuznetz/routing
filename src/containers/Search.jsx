import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchMovies } from '../actions';
import SearchBox from '../components/SearchBox.jsx';
import MovieGrid from '../components/MovieGrid.jsx';

connect(
    mapStateToProps,
    { searchMovies }
)
export default class Search extends Component {
    handleSearch = search =>{

    }
    render() {
        console.log(this.props);
        return (
            <div>
                <SearchBox search={""} onSearch={this.handleSearch} />
                {/* <MovieGrid /> */}
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        movies: state.movies.items,
        loading: state.movies.isFetching,
        search: ownProps.location.query.search
    };
}



