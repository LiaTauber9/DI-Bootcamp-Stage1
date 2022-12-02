import Garage from "./Garage";
import React from 'react'

class Car extends React.Component{
    constructor(){
        super()
        this.state = {
            color:'Red'
        }
    }
    render(){
        return(
            <>
            <header>This car is a {this.state.color} {this.props.model}</header>
            <Garage size='small' />
            </>
        )
    }
}
export default Car