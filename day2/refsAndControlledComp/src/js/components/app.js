import React from "react";

export default class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Employee Details</h1>

                <input placeholder="name" className="form-control" />
                <input placeholder="designation" className="form-control" />
                <input placeholder="department" className="form-control" />

                < br />

                <div className="button-container">
                    <button className="btn btn-primary" > Update </button>
                </div>
            </div>
        );
    }
}
