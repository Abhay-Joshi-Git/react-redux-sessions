import React from 'react';
import { connect } from 'react-redux';
import { getEmployees } from '../actions.js';

class employeeList extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.getEmployees();
    }

    render () {
        return (
            <div>
                <h3>Employee List</h3>

                {this.props.employees.map(item => {
                    return (
                        <div
                            key={item.name}
                            className='well well-sm'
                        >
                            Name: {item.name}
                            <br />
                            Department: {item.department}
                        </div>
                    )
                }) }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
}

export default connect(
    mapStateToProps,
    {getEmployees}
)(employeeList)
