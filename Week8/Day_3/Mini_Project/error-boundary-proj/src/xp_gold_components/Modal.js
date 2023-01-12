import React from "react"
import './Modal.css'

export class Modal extends React.Component{
    constructor(props){
        super(props);
        // this.state={

        // }
    }

    render(){
        return(
            <div className="modal-background">
                <div className="modal-body">
                    <p>{this.props.errorInfo}</p>
                </div>
            </div>
        )
    }
}