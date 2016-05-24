import React from 'react';

export default class EmployeeList extends React.Component {
    render() {
        return (
            <div>
                <h3>Employees</h3>
                {this.props.employees.map(item => {
                    return (
                        <div
                            key={item.id}
                            className='well well-sm'
                            onClick={() => this.props.onEmployeeClick(item)}
                            style={this.getEmployeeStyle(item,
                                this.props.selectedEmployee)}
                        >
                            id: {item.id}
                            <br />
                            Name : {item.name}
                            <br />
                            Department : {item.department}
                        </div>
                    )
                })}
            </div>
        )
    }

    getEmployeeStyle(item, selectedItemId) {
        var style;
        if (item.id === selectedItemId) {
            style = {
                backgroundColor: 'red'
            }
        } else {
            style = {
                backgroundColor: ''
            }
        }
        return style;
    }

}
