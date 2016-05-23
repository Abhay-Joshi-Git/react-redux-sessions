import React from 'react';
import _ from 'lodash';
import EmployeeForm from './employeeForm.js';

export default class App extends React.Component {

    constructor (props) {
        super();
        this.state = {
            selectedDeparmentId: null,
            selectedEmployeeId: null,
            employees: props.employees
        }
    }

    onAddEmployeeClick () {
        this.setState({
            employee: {
                id: this.state.employees.length + 1,
                name: '',
                department: ''
            }
        })
    }

    render () {
        console.log(this.state.employees.length);
        return (
            <div>
                <div className='row'>
                    <div className='col-md-4'>
                        { this.getDepartmentList(this.props.departments) }
                    </div>
                    <div className='col-md-4'>
                        { this.getEmployeeList(this.state.employees, this.props.departments) }

                        <div className='pull-right'>
                            <button
                                className='btn btn-primary'
                                onClick={() => this.onAddEmployeeClick()}
                            >
                                <i className='glyphicon glyphicon-plus-sign'></i>
                            </button>
                        </div>


                    </div>

                    <div className='col-md-4'>
                        { (this.state.employee &&
                            this.getFilteredEmployeeList(this.state.employees,
                                this.state.selectedDeparmentId).length) ?
                            <EmployeeForm
                                employee={this.state.employee}
                                departments={this.props.departments}
                                onEmployeeFormChage={this.onEmployeeChange.bind(this)}
                                key = {this.state.employee.id}
                            /> : null }
                    </div>

                </div>
            </div>
        );
    }

    onEmployeeChange (employee) {
        var { name, id, department  } = employee;
        var deptId = this.getDepartmentId(this.props.departments, department)

        var data = this.state.employees.filter(val => val.id !== id);
        data = [
            ...data,
            {
                name: name,
                id: id,
                departmentId: deptId
            }
        ];
        data = _.sortBy(data, 'id');
        this.setState({
            employees: data
        })
    }

    onDepartmentClick (id) {
        this.setState({
            selectedDeparmentId: id,
            selectedEmployeeId: null,
            employee: null
        })
    }

    getDepartmentStyle (department) {
        var style;
        if (this.state.selectedDeparmentId === department.id) {
            style = {
                backgroundColor: 'red'
            }
        }
        return style;
    }

    getDepartmentList (departments) {
        return (
            <div className='department-container'>
                <h2>Departments</h2>
                {
                    departments.map(item => {
                        return (
                            <div
                                className='well well-sm '
                                style={this.getDepartmentStyle(item)}
                                //className={(this.state.selectedDeparmentId === item.id ? 'selDept' : '') + ' ' + 'well well-sm '}
                                key={item.id}
                                onClick={() => this.onDepartmentClick(item.id)}
                            >
                                id: {item.id}
                                <br />
                                name: {item.name}
                                <br />
                                HOD : {item.hod}
                            </div>
                        );
                    })
                }
            </div>
        )
    }

    getFilteredEmployeeList (employees, selectedDepartmentId) {
        return employees.filter(item => {
            var selDep = selectedDepartmentId;
            return selDep ? selDep === item.departmentId : true
        })
    }

    getEmployeeList (employees, departments) {
        return (
            <div className='employees-container'>
                <h2>Employees</h2>
                {
                    this.getFilteredEmployeeList(employees, this.state.selectedDeparmentId)
                    .map(item => (
                        <div
                            className='well well-sm'
                            key={item.id}
                            onClick={() => this.onEmplClick(item)}
                            style={this.getEmplStyle(item)}
                        >
                            id: {item.id}
                            <br />
                            name: {item.name}
                            <br />
                            department: {this.getDepartmentName(departments, item.departmentId)}
                        </div>
                    ))
                }
            </div>
        )
    }

    onEmplClick (item) {
        var {name, id} = item;
        this.setState({
            selectedEmployeeId: item.id,
            employee: {
                name: name,
                id: id,
                department: this.getDepartmentName(this.props.departments, item.departmentId)
            }
        })
    }

    getEmplStyle (employee) {
        return {
            backgroundColor: (this.state.selectedEmployeeId === employee.id) ? 'red' : ''
        }
    }

    getDepartmentName (departments, id) {
        var department = _.find(departments, {id: id});
        return department ? department.name : ''
    }

    getDepartmentId (departments, name) {
        var department = _.find(departments, {name: name});
        return department ? department.id : null
    }
}
