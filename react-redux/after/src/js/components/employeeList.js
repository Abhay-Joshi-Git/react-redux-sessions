import React from 'react';
import { connect } from 'react-redux';

class employeeList extends React.Component {
    constructor() {
        super();
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
        employees: state
    }
}

export default connect(mapStateToProps)(employeeList)
