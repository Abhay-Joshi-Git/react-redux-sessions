import React from "react";
import ReactDom from "react-dom";
import App from "./components/app.js";

const departments = [
    {
        id: 1,
        name: 'development',
        hod: 'ABC'
    },
    {
        id: 2,
        name: 'QA',
        hod: 'XYZ'
    },
    {
        id: 3,
        name: 'devops',
        hod: 'PQR'
    }
];

const employees = [
    {
        id: 1,
        name: 'Dan',
        departmentId: 1
    },
    {
        id: 2,
        name: 'Pete',
        departmentId: 1
    },
    {
        id: 3,
        name: 'Will',
        departmentId: 3
    }
];


ReactDom.render(
    <App
        departments={departments}
        employees={employees}
    />,
    document.getElementById('app')
);
