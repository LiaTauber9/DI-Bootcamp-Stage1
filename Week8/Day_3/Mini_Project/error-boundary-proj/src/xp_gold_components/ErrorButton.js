import React from "react";

export class ErrorButton extends React.Component{
    constructor(){
        super();
        this.state={
            isClicked:false
        }
    }

    render(){
        if(this.state.isClicked){
            throw new Error("{msg:'my error msg'}")
        }
        return <button onClick={()=>this.setState({isClicked:true})}>Occure an error</button>
    }
 }