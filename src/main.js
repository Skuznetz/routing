import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { extractSession } from './utils/session';

import App from './containers/App.jsx';
import Search from './containers/Search.jsx';
import Movie from './containers/Movie.jsx';
import About from './containers/About.jsx';
import MovieSimilar from './containers/MovieSimilar.jsx';
import MovieRecommendations from './containers/MovieRecommendations.jsx';
import configureStore from './store';
import LoginPage from './containers/LoginPage.jsx';
import LoggedInLayout from './components/LoggedInLayout.jsx';
import { restoreAuth } from './actions';
import requireAuth from './hoc/requireAuth.jsx';






import 'normalize.css';
import './assets/main.css';


const routes = (
    <Route component={App}>
        <Route path="login" component={LoginPage} />
        <Route path="about" component={About} />

        <Route component={requireAuth(LoggedInLayout)}>
            <Route path="movies" component={Search} />
            <Route path="movies/:id" component={Movie}>
                <Route path="recommendations" component={MovieRecommendations} />
                <Route path="similar" component={MovieSimilar} />
            </Route>
        </Route>
</Route>);

const store = configureStore({}, history);
const history = syncHistoryWithStore(browserHistory, store);

const renderApp = () => {
    ReactDOM.render(
    <Provider store={store}>
         <Router history={browserHistory}>
            {routes}
        </Router> 
    </Provider>,
    document.getElementById('root')
);}
