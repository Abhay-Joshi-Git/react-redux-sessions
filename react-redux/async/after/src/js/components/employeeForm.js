import React from 'react';
import { connect } from 'react-redux';
import { addEmployee }  from '../actions.js';

class EmployeeForm extends React.Component {
    render() {
        return (
            <div>
                <h3>Employee Form</h3>
                <input
                    placeholder='Employee Name'
                    className='form-control'
                    ref={ele => this.name = ele}
                />

                <input
                    placeholder='Department Name'
                    className='form-control'
                    ref={ele => this.department = ele}
                />

                <br />

                <button
                    onClick={this.saveRecord.bind(this)}
                    className='btn btn-primary'
                >
                Submit
                </button>

            </div>
        );
    }

    saveRecord() {
        this.props.addEmployee({
            name: this.name.value,
            department: this.department.value
        })
    }
}

export default connect(null,
    {addEmployee}
)(EmployeeForm)
