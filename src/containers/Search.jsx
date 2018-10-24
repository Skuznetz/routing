import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';

import { isMoviesFetching, getSearchMoviesVoteAverage, getSearchMovies, getSearchMovieCount, getMoviesSearchQuery } from '../selectors';
import { searchMovies } from '../actions';
import SearchBox from '../components/SearchBox.jsx';
import MovieGrid from '../components/MovieGrid.jsx';
import Loader from '../components/Loader.jsx';

const styles = {
    container: {
        height: '100%',
        maxWidth: 800,
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        margin: '0 auto'
    }
};

// @withRouter

@connect(
    mapStateToProps,
    { searchMovies,push })
 export default class Search extends Component {
    componentDidMount() {
        const { search, searchMovies } = this.props;

        if (search) {
            searchMovies(search);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.search !== this.props.search) {
            this.props.searchMovies(nextProps.search);
        }
    }
    handleSearch = search =>{
           const { location } = this.props;

        this.props.push({
            pathname: location.pathname,
            query: { ...location.query, search }
        });
    }
 
    render() {
        return (
            <div>
                <SearchBox search={this.props.search} onSearch={this.handleSearch} />
                   <div style={styles.container}>
                        <Loader loading={this.props.loading}>
                            <p>Found {this.props.movieCount} movies</p>
                            <p>Av. vote {Math.round(this.props.voteAverage * 100) / 100}</p>
                            <MovieGrid movies={this.props.movies} /> 
                        </Loader>
                    </div>
            </div>
        );
    };
}


function mapStateToProps(state, ownProps) {
    return {
        movies: getSearchMovies(state),
        movieCount: getSearchMovieCount(state),
        voteAverage: getSearchMoviesVoteAverage(state),
        loading: isMoviesFetching(state),
        search: getMoviesSearchQuery(state)
    };
}



