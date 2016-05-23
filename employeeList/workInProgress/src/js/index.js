import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app.js';

const departments = [
    {
        name: 'Manufacturing',
        hod: 'ABC'
    },
    {
        name: 'Sales',
        hod: 'XYZ'
    },
    {
        name: 'Inventory',
        hod: 'PQR'
    }
];

const employeesData = [
    {
        id: 1,
        name: 'Alpha',
        department: 'Manufacturing'
    },
    {
        id: 2,
        name: 'Charlie',
        department: 'Manufacturing'
    },
    {
        id: 3,
        name: 'Delta',
        department: 'Inventory'
    }
];


ReactDom.render(
    <App employees={employeesData} departments={departments} />,
    document.getElementById('app')
);
