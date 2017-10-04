import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import TodosPage from './components/todos/todosPage';
import '../styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const history = createBrowserHistory();
const store = configureStore();

render(
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/todos" component={TodosPage} />
            </App>
        </Router>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();