import React from 'react';
import { connect } from 'react-redux';
import { addEmployeeActionCreator as addEmployee } from '../actions/employeesActions.js';

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

//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addEmployee: (item) => {
//             dispatch({
//                 type: 'ADD_EMPLOYEE',
//                 item: item
//             })
//         }
//     }
// }


export default connect(
    null,
    { addEmployee }
)(EmployeeForm)
