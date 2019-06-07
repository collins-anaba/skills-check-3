import React, { Component } from 'react';
import House from './Components/House/House';

export default class Dashboard extends Component {
    render () {
        return (
            <div>
         <h1>Dashboard</h1>
         <button>Add New Property</button>
         <House/> 

            </div>
        )
    }
}