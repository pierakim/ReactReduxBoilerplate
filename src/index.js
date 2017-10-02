import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import { createStore } from 'redux'

import App from './components/App'; //we define it
import HomePage from './components/home/HomePage'; //we define it
import AboutPage from './components/about/AboutPage'; //we define it

import '../styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const history = createBrowserHistory();
const store =  createStore(state => state);

render(
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </App>
        </Router>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();