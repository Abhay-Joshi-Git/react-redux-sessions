import React from 'react';

export default class EmployeeForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            employee: {...props.employee}
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            employee: {...nextProps.employee}
        })
    }

    handleNameChange(event) {
        this.setState({
            employee: {
                ...this.state.employee,
                name: event.target.value
            }
        })
    }

    handleDepartmentchange(event) {
        this.setState({
            employee: {
                ...this.state.employee,
                department: event.target.value
            }
        })
    }

    submitEmployee(e) {
        e.preventDefault();
        this.props.onFormSubmit(this.state.employee);
    }

    render() {
        console.log(this.props.employee, this.state.employee);
        return (
            <div>
                <h3> Employee Details </h3>
                <form onSubmit={(e) => this.submitEmployee(e)}>
                    <label>Name: </label>
                    <input
                        value={this.state.employee.name}
                        onChange={this.handleNameChange.bind(this)}
                    />
                    <br />
                    <label>Department: </label>
                    <input
                        value={this.state.employee.department}
                        onChange={(e) => this.handleDepartmentchange(e)}
                    />
                    <br />
                    <input type='submit' value='Update' />
                </form>
            </div>
        )
    }
}
