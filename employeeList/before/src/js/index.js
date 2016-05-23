import React from "react";
import ReactDom from "react-dom";
import App from "./components/app.js";

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

const employees = [
    {
        id: 1,
        name: 'Alpha',
        departmentId: 1
    },
    {
        id: 2,
        name: 'Charlie',
        departmentId: 1
    },
    {
        id: 3,
        name: 'Delta',
        departmentId: 3
    }
];


ReactDom.render(
    <App />,
    document.getElementById('app')
);
