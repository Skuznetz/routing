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

import LoginPage from './containers/LoginPage.jsx';
import LoggedInLayout from './components/LoggedInLayout.jsx';
import requireAuth from './hoc/requireAuth.jsx';
import configureStore from './store';
import { restoreAuth } from './actions';






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

const store = configureStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const renderApp = () => {
    ReactDOM.render(
    <Provider store={store}>
         <Router history={history}>
            {routes}
        </Router> 
    </Provider>,
    document.getElementById('root')
);}

const startApp = () => {
    const session = extractSession();

    if (session) {
        store.dispatch(restoreAuth(session)).then(() => renderApp());
    } else {
        renderApp();
    }
}

startApp();