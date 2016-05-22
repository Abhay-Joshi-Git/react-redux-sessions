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
                        { this.state.employee ?
                            <EmployeeForm
                                employee={this.state.employee}
                                departments={this.props.departments}
                                onEmployeeFormChage={this.onEmployeeChange.bind(this)}                                
                            /> : null }
                    </div>

                </div>
            </div>
        );
    }

    onEmployeeChange (employee) {
        var { name, id, department  } = employee;
        console.log(employee, name, id, department);
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
        console.log(data);
        this.setState({
            employees: data
        })
    }

    onDepartmentClick (id) {
        this.setState({
            selectedDeparmentId: id,
            selectedEmployeeId: null
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

    getEmployeeList (employees, departments) {
        return (
            <div className='employees-container'>
                <h2>Employees</h2>
                {
                    employees
                    .filter(item => {
                        var selDep = this.state.selectedDeparmentId;
                        return selDep ? selDep === item.departmentId : true
                    })
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
        console.log(item)
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
            backgroundColor: (this.state.selectedEmployeeId === employee.id) ? 'lime' : ''
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
