import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import App from './containers/App.jsx';
import Search from './containers/Search.jsx';
import Movie from './containers/Movie.jsx';
import About from './containers/About.jsx';
import MovieSimilar from './containers/MovieSimilar.jsx';
import MovieRecommendations from './containers/MovieRecommendations.jsx';


import store from './store';

import 'normalize.css';
import './assets/main.css';



ReactDOM.render(
    <Provider store={store}>
         <Router history={browserHistory}>
            {routes}
        </Router> 
    </Provider>,
    document.getElementById('root')
);
