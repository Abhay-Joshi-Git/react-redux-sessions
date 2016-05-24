import React from 'react';
import ReactDom from 'react-dom';
import Routes from './routes.js';

const employees = [
    {
        id: 1,
        name: 'Alpha',
        department: 'Manufacturing'
    },
    {
        id: 2,
        name: 'beta',
        department: 'Sales'
    }
];


ReactDom.render(
    <Routes employees={employees}/>,
    document.getElementById('app')
);
