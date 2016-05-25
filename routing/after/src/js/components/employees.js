import React from 'react';
import { Link } from 'react-router';

export default (props) => {
    var data = props.route.employees;
    if (props.params.id) {
        data = props.route.employees.filter(item => item.id == props.params.id)
    }
    return (
        <div>
            {data.map(item => {
                return (
                    <div key={item.id} className='well well-sm'>
                        key: <Link to= {'employee/' + item.id} >{item.id} </Link>
                        <br />
                        Name: {item.name}
                        <br />
                        department: {item.department}
                    </div>
                )
            })}
        </div>
    )
}
