import React from 'react';
import { Link, withRouter, IndexLink } from 'react-router';

class App extends React.Component {

    render() {
        return (
            <div>
                <div className='container'>
                    <Link to='/' activeStyle={{color:'red'}}>Home</Link>
                    <IndexLink to='/' activeStyle={{color:'red'}}>Home</IndexLink>
                    { '   '}
                    <Link to='/about' >About</Link>
                    { '   '}
                    <Link to='/employees' >Employees</Link>
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
