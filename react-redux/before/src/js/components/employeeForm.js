import React from 'react';
import store from '../store.js';

export default class EmployeeForm extends React.Component {
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
        console.log(store)
        store.dispatch({
            type: 'ADD_EMPLOYEE',
            item: {
                name: this.name.value,
                department: this.department.value
            }
        })
    }
}
