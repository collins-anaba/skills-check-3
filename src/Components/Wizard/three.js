import React, {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import store from "../../store";
import {UPDATE_MORTGAGE, UPDATE_RENT } from "../../store"


export default class stepThree extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: store.getState().name,
            address: store.getState().address,
            city: store.getState().city,
            State: store.getState().State,
            zip: store.getState().zip,
            img: store.getState().img,
            mortgageAmount: store.getState().mortgageAmount,
            monthlyRent: store.getState().monthlyRent,

        }
    }

    componentDidMount(){
        store.subscribe(() => {
          this.setState({
            mortgageAmount: store.getState().mortgageAmount,
            monthlyRent: store.getState().monthlyRent
          })
        })
    }
    

    handleMortgage = (e) => {
        this.setState({
            mortgageAmount: e.target.value
        })
    }

    handleRent = (e) => {
        this.setState({
            monthlyRent: e.target.value
        })
    }

    saveChanges() {
        store.dispatch({
          type: UPDATE_MORTGAGE,
          payload: this.state.mortgageAmount
        })
        store.dispatch({
            type: UPDATE_RENT,
            payload: this.state.monthlyRent
          })
    
    }
    

    postItem = () => {

        axios
        .post("/api/houses", {name: this.state.name, 
                              address: this.state.address, 
                              city: this.state.city, 
                              state:this.state.State, 
                              zip: this.state.zip,
                              img: this.state.img,
                              mortgageAmount: this.state.mortgageAmount,
                              monthlyRent: this.state.monthlyRent
                            }
        )
        
    }

    render(){
        return(
            <div>
                    <label>Monthly Mortgage Amount</label>
                    <input onChange = {(e) => this.handleMortgage(e)}></input>
                    <br />
                    <label>Desired Monthly Rent</label>
                    <input onChange = {(e) => this.handleRent(e)}></input>
                    <br />
                    <Link to = "/wizard/step2">
                        <button>Previous Step</button>
                    </Link>
                    <br />
                    <Link to = "/">
                        <button onClick = {this.saveChanges} onClick = {this.postItem}>Complete</button>
                    </Link>


            </div>
        )
        
    }
}