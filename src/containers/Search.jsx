import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { searchMovies } from '../actions';
import SearchBox from '../components/SearchBox.jsx';
import MovieGrid from '../components/MovieGrid.jsx';

withRouter

connect(
    mapStateToProps,
    { searchMovies }
)
export default class Search extends Component {
       componentWillReceiveProps(nextProps) {
        if (nextProps.search !== this.props.search) {
            this.props.searchMovies(nextProps.search);
        }
    }
    handleSearch = search =>{
           const { router, location } = this.props;

        router.push({
            pathname: location.pathname,
            query: { ...location.query, search },
        });
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <SearchBox search={this.props.search} onSearch={this.handleSearch} />
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



