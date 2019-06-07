import React, {Component} from "react"
import {Link} from "react-router-dom"
import store from "../../store"
import {UPDATE_IMG} from "../../store"

export default class stepTwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: store.getState().img
        }
        this.saveChanges = this.saveChanges.bind(this);
    }

    componentDidMount(){
        store.subscribe(() => {
          this.setState({
            img: store.getState().img
          })
        })
    }
    

    handleImg (e) {
        this.setState({
            img: e.target.value
        })
    }

    saveChanges() {
        store.dispatch({
          type: UPDATE_IMG,
          payload: this.state.img
        })
    
    }
    
    render(){
        return(
            <div>
                    <label>Image Url</label>
                    <input onChange = {(e) => this.handleImg(e)}></input>
                    <Link to = "/wizard/one">
                        <button>Previous Step</button>
                    </Link>
                    <Link to = "/wizard/three">
                         <button onClick = {this.saveChanges}>Next Step</button>
                    </Link>

            </div>
        )
        
    }
}