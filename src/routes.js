import React, { Component } from 'react';
import { Switch, Route }  from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Wizard from "./components/Wizard";


export default (
    <Switch>
        <Route component={Dashboard}/>
        <Route component={Wizard}/>


    </Switch>
)
