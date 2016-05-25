import React from 'react';

export default () => (
    <div className='well well-sm'>
        <h3> Sing In </h3>
        <input placeholder='user id' className='form-control' />
        <input type='password' placeholder='password' className='form-control' />
        <br />
        <button className='btn btn-primary'>Submit</button>
    </div>
);
