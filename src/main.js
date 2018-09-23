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

const routes = (
    <Route component={App}>
        <Redirect from="/" to="movies" />
        <Route path="movies" component={Search} />
        <Route path="about" component={About} />
        <Route path="movies/:id" component={Movie}>
            <Route path="recommendations" component={MovieRecommendations} />
            <Route path="similar" component={MovieSimilar} />
        </Route>
    </Route>
)

ReactDOM.render(
    <Provider store={store}>
         <Router history={browserHistory}>
            {routes}
        </Router> 
    </Provider>,
    document.getElementById('root')
);
