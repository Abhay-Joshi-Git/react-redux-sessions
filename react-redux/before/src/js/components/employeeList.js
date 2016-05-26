import React from 'react';
import { connect } from 'react-redux';

class EmployeeList extends React.Component {
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
        employees : state
    }
}

export default connect(
    mapStateToProps
)(EmployeeList);
