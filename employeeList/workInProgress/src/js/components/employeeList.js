import React from 'react';

export default class EmployeeList extends React.Component {
    render() {
        return (
            <div>
                <h3>Employees</h3>
                {this.props.employees.map(item => {
                    return (
                        <div key={item.id} className='well well-sm'>
                            Name : {item.name}
                            <br />
                            Department : {item.department}
                        </div>
                    )
                })}
            </div>
        )
    }
}
