import React from "react";
import { Modal } from "./Modal";

export class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state={
            hasError:false,
            errorInfo:null
        }
    }

    componentDidCatch(error,errorInfo){
        console.log('errorInfo=>',errorInfo);
        this.setState({hasError:true})
        // this.setState({errorInfo:errorInfo})
    }

    render(){
        if(this.state.hasError){
            console.log('rendered error');
            return <Modal errorInfo='errorInfo'/>
           
        }
        return this.props.children
    }
}