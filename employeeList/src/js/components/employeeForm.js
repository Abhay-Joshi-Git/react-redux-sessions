import React from 'react';

export default class EmployeeForm extends React.Component {

    constructor (props) {
        super();
        this.state = {
            employee: {...this.props.employee}
        }
    }

    render () {
        return (
            <div>
                <form>
                    <input
                        ref={(ele) => this.nameInputEl = ele}
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                </form>
            </div>
        )
    }

    onNameChange (event) {
        this.state({
            employee: {
                ...this.state.employee,
                name: event.target.name
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
