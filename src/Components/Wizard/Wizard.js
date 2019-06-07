import React, { Component } from 'react';

export default class Wizard extends Component  {
    constructor () {
        super ();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }
    render () {
        const { name, address, city, state, zipcode} = this.state
        return (
            <div>
                <button>Cancel</button>
            </div>
        )
    }
}