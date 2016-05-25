import React from 'react';
import { withRouter }  from 'react-router';

 class LoginComponent extends React.Component {
    constructor(props) {
        super();
        props.router.setRouteLeaveHook(props.route, this.onRouteLeave)
    }

    onRouteLeave() {
        return 'are you sure?'
    }

    render() {
        return (
            <div className='well well-sm'>
                <h3> Sing In </h3>
                <input placeholder='user id' className='form-control' />
                <input type='password' placeholder='password' className='form-control' />
                <br />
                <button className='btn btn-primary'>Submit</button>
            </div>
        );
    }
 }



export default withRouter(LoginComponent)
