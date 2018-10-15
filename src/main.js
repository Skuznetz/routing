import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './containers/App.jsx';
import Search from './containers/Search.jsx';
import Movie from './containers/Movie.jsx';
import About from './containers/About.jsx';
import MovieSimilar from './containers/MovieSimilar.jsx';
import MovieRecommendations from './containers/MovieRecommendations.jsx';
import configureStore from './store';
import LoginPage from './containers/LoginPage.jsx';
import LoggedInLayout from './components/LoggedInLayout.jsx';






import 'normalize.css';
import './assets/main.css';
const history = syncHistoryWithStore(browserHistory, store);
const store = configureStore({}, history);

const routes = (
    <Route component={App}>
        <Route path="login" component={LoginPage} />
        <Route path="about" component={AboutPage} />

        <Route component={requireAuth(LoggedInLayout)}>
            <Route path="movies" component={SearchPage} />
            <Route path="movies/:id" component={MoviePage}>
                <Route path="recommendations" component={MovieRecommendationsPage} />
                <Route path="similar" component={MovieSimilarPage} />
            </Route>
        </Route>
    </Route


ReactDOM.render(
    <Provider store={store}>
         <Router history={browserHistory}>
            {routes}
        </Router> 
    </Provider>,
    document.getElementById('root')
);
