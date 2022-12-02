import React from 'react'

class Phone extends React.Component{
    constructor(){
        super()
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        }
    }

    changeColor(newColor){
        this.setState({color:newColor})
    } 

    render(){
        const {brand, model, color, year} = this.state
        return(
            <>
            <h1>My Phone is a {brand}</h1>
            <h3>It is {color} {model} from {year}</h3>
            <button onClick={()=>this.changeColor('blue')}>Change color</button>
            </>
        )
    }
}
export default Phone