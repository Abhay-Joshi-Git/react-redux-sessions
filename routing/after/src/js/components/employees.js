import React from 'react';

export default (props) => {
    console.log(props.route);
    return (
        <div>
            {props.route.employees.map(item => {
                return (
                    <div key={item.id} className='well well-sm'>
                        Name: {item.name}
                        <br />
                        department: {item.department}
                    </div>
                )
            })}
        </div>
    )
}
