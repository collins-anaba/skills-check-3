import React, {Component} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

export default class House extends Component{
    constructor(){
        super();
        this.state = {

        }
        this.deletePost = this.deletePost.bind(this)
    }
    
    deletePost(id){
        axios
        .delete(`/api/houses/${id}`)
    }  

    render(){
        return(
            <div>

                <h4>Property Name:{this.props.name}</h4>
                <h4>Address: {this.props.address}</h4>
                <h4>City: {this.props.city}</h4>
                <h4>State: {this.props.state}</h4>
                <h4>Zip: {this.props.zip}</h4>
                <h4>Img: {this.props.img}</h4>
                <h4>Mortgage: {this.props.mortgaga}</h4>
                <h4>Rent: {this.props.rent}</h4>
                <Link to = "/">
                    <button onClick = {() => this.deletePost(this.props.id)}>Delete</button>
                </Link>
                         
            </div>
        )
    }
}
