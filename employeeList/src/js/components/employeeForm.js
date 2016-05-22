import React from 'react';

export default class EmployeeForm extends React.Component {

    constructor (props) {
        super();
        console.log(props);
        this.state = {
            employee: {...props.employee}
        }
    }

    onSubmit (e) {
        e.preventDefault();
        //console.log(this);
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
                        <input type='submit' className='glyphicon glyphicon-ok-sign'/>
                    </div>
                </form>

            </div>
        )
    }

    onNameChange (event) {
        //console.log(event.target.value);
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
