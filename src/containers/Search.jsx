import React, { Component } from 'react';
import SearchBox from '../components/SearchBox.jsx';
import MovieGrid from '../components/MovieGrid.jsx';

 class Search extends Component {
    render() {
        return (
            <div>
                <SearchBox />
                <MovieGrid />
            </div>
        );
    }
}

export default Search;


