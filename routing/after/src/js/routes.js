import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from './components/app.js';
import About from './components/about.js';
import Employees from './components/employees.js';
import Home from './components/home.js';

export default (props) => (
    <Router history={browserHistory} >
        <Route path='/' component={ App } >
            <IndexRoute component={Home} />
            <Route path='home' compoent={Home} />
            <Route path='about' component={ About } />
            <Route path='employees' component={Employees} employees={props.employees} test={'testing'}/>
        </Route>
    </Router>
)
