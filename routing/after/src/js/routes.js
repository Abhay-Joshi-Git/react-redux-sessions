import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import App from './components/app.js';
import About from './components/about.js';
import Employees from './components/employees.js';
import Home from './components/home.js';
import Login from './components/login.js';

var isLoggedIn = true;

var authenticate = (nextState, replace) => {
    if (!isLoggedIn) {
        replace({
            pathname: '/login'
        });
    }
}

var onLeaveHandler = (nextLocation, reaplce) => {
    console.log('are you sure?', nextLocation);
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
        <Route path='/employee/:id'
                component={Employees}
                employees={props.employees}
            />
            <Route path='login'
                component={Login}
                onLeave={onLeaveHandler}
            />
        </Route>
    </Router>
)
