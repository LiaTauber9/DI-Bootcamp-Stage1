import React from "react";
import './Phone.css'

export class Phone extends React.Component{
    constructor(){
        super();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
        
    }
    render(){
        const {brand, model, color, year} = this.state;
        return(
            <div className="box">
                <h1>My phone is a {brand}</h1>
                <p>It is a {color} {model} from {year}</p>
            </div>
        )
    }
}