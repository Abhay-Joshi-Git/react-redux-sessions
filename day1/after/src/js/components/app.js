import React from "react";
import Class from "./classComponent.js";

export default class App extends React.Component {
    constructor () {
        super();
        this.state = {
            filter : {
                classId: null
            }
        };
    }

    render () {
        return (
            <div>
                <h2>Class List </h2>
                { this.getClassesList() }

                <br />
                <br />

                <h2>Students List </h2>
                { this.getStudentsList() }
            </div>
        );
    }

    onClassClick = (id) => {
        this.setState({
            filter: {
                classId: id
            }
        });
    }


    getClassesList () {
        return (
            <div>
                {this.props.classes.map(item => {
                        return <Class
                            key={item.id} 
                            item={item}
                            handleItemClick={this.onClassClick} />
                    })
                }
            </div>
        )
    }

    getStudentsList () {
        return (
            <div>
                {this.props.students.map(item => {
                        if (this.state.filter.classId) {
                            if (item.classId === this.state.filter.classId) {
                                return (
                                    <div className="well well-sm" key={item.name} >
                                        <h4>name : {item.name}</h4>
                                        <h4>Class id : {item.classId}</h4>
                                    </div>
                                )
                            }
                        } else {
                            return (
                                <div className="well well-sm" key={item.name} >
                                    <h4>name : {item.name}</h4>
                                    <h4>Class id : {item.classId}</h4>
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }

}
