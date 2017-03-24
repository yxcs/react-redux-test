import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import User from './pages/User';
import AppleEat from './pages/AppleEat';
import store from './stores/stores';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="user" component={User} />
                <Route path="apple" component={AppleEat} />
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);