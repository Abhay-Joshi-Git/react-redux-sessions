import React from 'react';
import { Link, withRouter, IndexLink } from 'react-router';

class App extends React.Component {

    render() {
        return (
            <div>
                <div className='container'>
                    <Link to='/home' activeStyle={{color:'red'}}>Home</Link>
                    { '   '}
                    <Link to='/about' >About</Link>
                    { '   '}
                    <Link to='/employees' >Employees</Link>
                    { '   '}
                    <Link to='/login'>Login</Link>                
                </div>
                {this.props.children}
            </div>
        )
    }

};

const NavigateToAbout = (props) => {
    props.router.push('/about');
}

export default withRouter(App);
