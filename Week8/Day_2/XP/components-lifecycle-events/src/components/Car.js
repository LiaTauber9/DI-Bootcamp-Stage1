import React from 'react';
import { Garage } from './Garage';

export class Car extends React.Component{
    constructor(){
        super();
        this.state ={
            color:'red'
        }
    }
    render(){
        return(
            <>
            <h1>this car is a {this.state.color} {this.props.model}</h1> 
            <Garage size='small'/>
            </>
        )
    }
        
    
}