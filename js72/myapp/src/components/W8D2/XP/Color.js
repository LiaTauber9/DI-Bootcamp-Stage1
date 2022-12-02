import React from 'react'

class Color extends React.Component{
    constructor(){
        super()
        this.state= {
            favoriteColor:'red'
        }    
    }

    changeColor = () => {
        this.setState({favoriteColor:'blue'})
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({favoriteColor:'yellow'})
        }, 5000);
        console.log('componentDidMount');
    }
    render(){
        return(
            <>
            <h1>My Favorite Color is {this.state.favoriteColor}</h1>
            <button onClick={this.changeColor}>change Color</button>
            </>
        )
    }
}
export default Color