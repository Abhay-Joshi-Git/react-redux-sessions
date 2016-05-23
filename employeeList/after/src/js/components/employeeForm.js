import React from 'react';

export default class EmployeeForm extends React.Component {

    constructor (props) {
        super();
        this.state = {
            employee: {...props.employee}
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            employee: {...nextProps.employee}
        })
    }

    onSubmit (e) {
        e.preventDefault();
        this.props.onEmployeeFormChage({...this.state.employee});
    }

    onDeptChange (e) {
        this.setState({
            employee: {
                ...this.state.employee,
                department: e.target.value
            }
        })
    }

    render () {
        return (
            <div>
                <h4>Employee Details</h4>
                <form
                    onSubmit={this.onSubmit.bind(this)}
                >
                    <div className='well well-sm'>
                        <label>Name:</label>
                        <input
                            ref={(ele) => this.nameInputEl = ele}
                            value={this.state.employee.name}
                            onChange={(event) => this.onNameChange(event)}
                        />
                    </div>
                    <div className='well well-sm'>
                        Department: { '  ' }
                        <select
                            value={this.state.employee.department}
                            onChange={this.onDeptChange.bind(this)}
                        >
                            {
                                this.props.departments.map(item => {
                                    return (
                                        <option
                                            value={item.name}
                                            key={item.name}
                                        >
                                            {item.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <input type='submit' className='btn btn-primary' value='save'/>
                    </div>
                </form>

            </div>
        )
    }

    onNameChange (event) {
        this.setState({
            employee: {
                ...this.state.employee,
                name: event.target.value
            }
        })
    }
}

EmployeeForm.defaultProps = {
    employee: {
        name: '',
        id: null,
        departmentId: null
    }
}
