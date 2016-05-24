import React from 'react';
import DepartmentList from './departmentList.js';
import EmployeeList from './employeeList.js';
import EmployeeForm from './employeeForm.js';
import _ from 'lodash';

export default class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selectedDepartment: null,
            selectedEmployee: null,
            employees: [...props.employees]
        }
    }

    handleDepartmentClick(department) {
        console.log(department);
        this.setState({
            selectedDepartment: department.name
        });
    }

    handleEmployeeClick(employee) {
        this.setState({
            selectedEmployee: employee.id
        });
    }


    getFilteredEmployeeData() {
        if (!this.state.selectedDepartment) {
            return this.state.employees;
        }
        return this.state.employees.filter(item =>
            item.department === this.state.selectedDepartment)
    }

    updateEmployee(updatedItem) {
        var data = this.state.employees;
        data = data.filter(item => item.id !== updatedItem.id);
        data = [...data, updatedItem];
        data = _.sortBy(data, 'id');
        this.setState({
            employees: data
        })
        //console.log(updatedItem)
    }

    render () {
        return (
            <div className='row'>
                <div className='col-sm-4'>
                    <DepartmentList
                        departments={this.props.departments}
                        onDepartmentClick={this.handleDepartmentClick.bind(this)}
                        selectedDepartment={this.state.selectedDepartment}
                    />
                </div>
                <div className='col-sm-4'>
                    <EmployeeList
                        employees={this.getFilteredEmployeeData()}
                        onEmployeeClick={this.handleEmployeeClick.bind(this)}
                        selectedEmployee={this.state.selectedEmployee}
                    />
                </div>
                <div className='col-sm-4'>
                    {this.state.selectedEmployee ?
                        <EmployeeForm
                            employee={this.getEmployeeById(this.state.selectedEmployee)}
                            onFormSubmit={this.updateEmployee.bind(this)}
                        /> : ''
                    }
                </div>
            </div>
        );
    }

    getEmployeeById(id) {
        return _.find(this.state.employees, {id: id})
    }
}
