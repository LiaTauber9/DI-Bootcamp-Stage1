import React from 'react';



export class Events extends React.Component{
    constructor(){
        super();
        this.state = {
            isToggleOn:true
        }
    }

    clickMe(){
        alert('I was clicked')
    } 

    handleKeyUp(event){
        if(event.key==='Enter'){
            alert(`The Enter key was pressed, your input is: ${event.target.value}`)
        }
    }

    click = ()=>{
        const current = this.state.isToggleOn ? false : true
        this.setState({isToggleOn:current})
    }

    render(){
        return(
            <>
                <input name='input' onKeyUp={this.handleKeyUp} placeholder='enter key'/>
                <button onClick={this.clickMe}>Click Me</button>
                <button onClick={this.click}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
            </>
        )
    }
}