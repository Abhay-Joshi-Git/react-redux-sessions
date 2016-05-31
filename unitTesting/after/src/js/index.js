import React from "react";
import ReactDom from "react-dom";
import App from "./components/app.js";

ReactDom.render(<App text={'abcd'}/>,
    document.getElementById('app')
);
