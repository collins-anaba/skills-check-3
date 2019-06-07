import React from "react"
import Dashboard from "./Dashboard/Dashboard"
import Wizard from "./Wizard/Wizard"
import { Switch, Route } from "react-router-dom"
import StepOne from "./Wizard/one"
import StepTwo from "./Wizard/two"
import StepThree from "./Wizard/three"

export  default(
    <Switch>
        <Route exact path = "/" component={Dashboard} />
        <Route  path = "/wizard/one" component = {One} />
        <Route  path = "/wizard/two" component = {two}/>
        <Route  path = "/wizard/three" component = {three}/>
    </Switch>
)