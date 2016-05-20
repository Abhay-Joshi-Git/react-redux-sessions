import React from "react";

export default class Person extends React.Component {

    constructor () {
        super();
        this.state = {
            person: {
                name: 'kktro',
                age: null,
                emailId: null
            }
        }
    }

    render () {
        return (
            <div>
                name : { this.state.person.name }

                <br />

                age: {this.state.person.age}

                < br />


                <input value={this.state.person.name} onChange={this.setName.bind(this)} />

                < br />

                <button onClick={() => this.emmitChange()}> change data </button>

                < br />
            <input defaultValue={this.state.person.name}/>

            </div>
        )
    }

    setName (event) {
        // var personValue = this.state.person;
        // var value = event.target.value;
        //
        // var data = {
        //     ...this.state.person ,
        //     name: value
        // };
        // console.log(data);

        this.setState({
            person: {
//                ...this.state.person,
                name: event.target.value
            }
        })
    }

    emmitChange () {
        var data = {
            name: 'abc',
            age: 20,
            emailId: 'scs.csc'
        };
        this.changeData (data);
        data.name = 'xyz';
    }

    changeData (data) {
        this.setState({
            person: {...data}
        })
    }



}
