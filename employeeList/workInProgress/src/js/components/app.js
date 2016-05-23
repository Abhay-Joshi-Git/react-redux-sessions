import React from 'react';
import DepartmentList from './departmentList.js';
import EmployeeList from './employeeList.js';

export default class App extends React.Component {
    render () {
        console.log(this.props.employees, this.props.departments);
        return (
            <div>
                <DepartmentList departments={this.props.departments} />
                <EmployeeList employees={this.props.employees} />
            </div>
        );
    }
}
