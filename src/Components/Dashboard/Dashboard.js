import React, {Component} from "react"
import House from "./House"
import {Link} from "react-router-dom"
import axios from "axios";
import store from "../../store"
export default class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            houses: store.getState().products
        }
    }

    componentDidMount(){
       axios
       .get("/api/houses")
       .then(result => {
           this.setState({
               houses: result.data
           })
       }) 
       store.subscribe(() => {
        this.setState({
          houses: store.getState().products
        })
      })
    }
    

    render(){
        const houseListings = this.state.houses.map((element, index) => {
            return <House key = {index}
                          id = {element.id}
                          name = {element.name}
                          address= {element.address}
                          city ={element.city}
                          state = {element.state}
                          zip ={element.zip}
                          img = {element.img}
                          mortgage = {element.mortgageAmount}
                          rent = {element.monthlyRent}
                          />
        }   
        )

        return(
            <div>

                <div>Dashboard</div>
                <Link to =  "/wizard/one"><button>Add New Property</button></Link>
                <h1>Listings</h1>
                {houseListings}


            </div>
        )
    }
}