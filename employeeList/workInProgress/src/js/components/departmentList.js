import React from 'react';

export default class DepartmentList extends React.Component {
    render() {
        console.log('mark ----')

        return (
            <div>
                <h3>Departments</h3>
                {this.props.departments.map(item => {
                    return (
                        <div key={item.name} className='well well-sm'>
                            Name : {item.name}
                            <br />
                            HOD : {item.hod}
                        </div>
                    )
                })}
            </div>
        )
    }
}
