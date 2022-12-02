import React from 'react'

class Event extends React.Component{
    constructor(){
        super()
        this.state = {
            isToggled:'ON'
        }
    }
    clickMe = () => {
        alert('I was clicked')
    }

    handleKeyPress(e){
        if(e.key == 'Enter'){
            alert('Your input is: '+ e.target.value)
        }
    }

    isToggleOn(event){
        const val = this.state.isToggled == 'ON' ? 'OF' : 'ON';
        this.setState({isToggled:val})
    }

    render(){
        return(
            <>
            <button onClick={()=> {this.clickMe()}}>Click Me</button>
            <input onKeyPress={(e)=>this.handleKeyPress(e)} />
            <button onClick={()=>this.isToggleOn()}>{this.state.isToggled}</button>
            </>
        )
    }
}
export default Event