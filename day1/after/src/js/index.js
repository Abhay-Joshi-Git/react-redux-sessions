import React from "react";
import ReactDom from "react-dom";
import App from "./components/app.js";
import Person from "./components/person.js";

const students = [
    {
        name: 'John',
        classId: 1
    },
    {
        name: 'Jane',
        classId: 2
    },
    {
        name: 'Ronny',
        classId: 2
    },
    {
        name: 'Krish',
        classId: 3
    },
    {
        name: 'Bunty',
        classId: 3
    }
];

const classes = [
    {
        id: 1,
        teacher : 'ABC'
    },
    {
        id: 2,
        teacher : 'XYZ'
    },
    {
        id: 3,
        teacher : 'PQR'
    }
];

ReactDom.render(
    <App students={students} classes={classes}/>,
    document.getElementById('app')
);

// ReactDom.render(
//     <Person />,
//     document.getElementById('app')
// );
