import React from 'react';

export default class EmployeeForm extends React.Component {

    constructor (props) {
        super();
        console.log('constructor ',  props.employee);
        this.state = {
            employee: {...props.employee}
        }
    }

    setEmployeeAsState (props) {
        console.log('setting employee in state', {...props.employee}, this.state);
        this.setState = {
            employee: {...props.employee}
        }
    }

    componentWillReceiveProps (nextProps) {
        //console.log('next props ',  nextProps.employee);
        this.setEmployeeAsState(nextProps)
    }

    onSubmit (e) {
        e.preventDefault();
        //console.log(this);
        this.props.onEmployeeFormChage({...this.state.employee});
    }



    onDeptChange (e) {
        console.log('dept change');
        this.setState({
            employee: {
                ...this.state.employee,
                department: e.target.value
            }
        })
    }

    render () {
        console.log('render', this.state);
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
        //console.log(event.target.value);
        console.log('name change');

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
