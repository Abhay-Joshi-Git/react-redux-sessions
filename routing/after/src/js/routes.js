import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app.js';
import About from './components/about.js';
import Employees from './components/employees.js';
import Home from './components/home.js';
import Login from './components/login.js';

var isLoggedIn = false;

var authenticate = (nextState, replace) => {
    if (!isLoggedIn) {
        replace({
            pathname: '/login'
        });
    }
}

export default (props) => (
    <Router history={browserHistory} >
        <Route path='/' component={ App } >
            <Route path='home' component={Home} />
            <Route path='about' component={ About } />
            <Route path='employees'
                component={Employees}
                employees={props.employees}
                onEnter={authenticate}
            />
            <Route path='login' component={Login} />
        </Route>
    </Router>
)
