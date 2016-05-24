import React from 'react';

export default class DepartmentList extends React.Component {
    render() {
        return (
            <div>
                <h3>Departments</h3>
                {this.props.departments.map(item => {
                    return (
                        <div
                            key={item.name}
                            className='well well-sm'
                            onClick={() => this.props.onDepartmentClick(item)}
                            style={this.getDepartmentStyle(item,
                                this.props.selectedDepartment)}
                        >
                            Name : {item.name}
                            <br />
                            HOD : {item.hod}
                        </div>
                    )
                })}
            </div>
        )
    }

    getDepartmentStyle(department, selectedItemName) {
        var style;
        if (department.name === selectedItemName) {
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
