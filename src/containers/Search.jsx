import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Loader from '../components/Loader.jsx';


import { searchMovies } from '../actions';
import SearchBox from '../components/SearchBox.jsx';
import MovieGrid from '../components/MovieGrid.jsx';

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

@withRouter

@connect(
    mapStateToProps,
    { searchMovies }
)
export default class Search extends Component {
    componentWillMount() {
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
           const { router, location } = this.props;

        router.push({
            pathname: location.pathname,
            query: { ...location.query, search },
        });
    }
    render() {
        return (
            <div>
                <SearchBox search={this.props.search} onSearch={this.handleSearch} />
                   <div style={styles.container}>
                        <Loader loading={this.props.loading}>
                             <MovieGrid movies={this.props.movies} /> 
                        </Loader>
                    </div>
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



