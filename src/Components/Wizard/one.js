import React, {Component} from "react"
import {Link} from "react-router-dom"
import store from "../../store"
import {UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE , UPDATE_ZIP} from "../../store"

export default class Wizard extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: store.getState().name,
            address: store.getState().address,
            city: store.getState().city,
            State: store.getState().State,
            zip: store.getState().zip,
        }
        this.handleName = this.handleName.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    componentDidMount(){
        store.subscribe(() => {
          this.setState({
            name: store.getState().name,
            address: store.getState().address,
            city: store.getState().city,
            State: store.getState().State,
            zip: store.getState().zip,
          })
        })
      }
    
    handleName (e) {
        this.setState({
            name: e.target.value
        })
    }
    
   
    handleAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    

    handleCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    

    handleState = (e) => {
        this.setState({
            State: e.target.value
        })
    }
    

    handleZip = (e) => {
        this.setState({
            zip: e.target.value
        })
    }

    saveChanges() {
        store.dispatch({
          type: UPDATE_NAME,
          payload: this.state.name
        })
    
        store.dispatch({
          type:UPDATE_ADDRESS,
          payload: this.state.address
        })
        store.dispatch({
            type:UPDATE_CITY,
            payload: this.state.city
          })
        store.dispatch({
            type:UPDATE_STATE,
            payload: this.state.State
          })
        store.dispatch({
            type:UPDATE_ZIP,
            payload: this.state.zip
          })
      }
    
   
    render(){
        return(
            <div>
                <label>Property Name</label>
                <input onChange = { (e) => this.handleName(e)}></input>
                <br />

                <label>Address</label>
                <input onChange = { (e) => this.handleAddress(e)}></input>
                <br />

                <label>City</label>
                <input onChange = { (e) => this.handleCity(e)}></input>
                <br />

                <label>State</label>
                <input onChange = { (e) => this.handleState(e)}></input>
                <br />

                <label>Zip</label>
                <input onChange = { (e) => this.handleZip(e)}></input>

                <Link to = "/wizard/step2">
                    <button onClick = {() => this.saveChanges()}>Next Step</button>
                </Link>

            </div>

        )
    }
}