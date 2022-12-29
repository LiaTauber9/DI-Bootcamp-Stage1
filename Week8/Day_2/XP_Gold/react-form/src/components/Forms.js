import React from 'react';

export class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            name:''
        }
    }

    handleInput = (event)=>{
        this.setState({name:event.target.value})
    }

    render(){
        let header = '';
        if(this.state.name){
            header = <h1>Hello {this.state.name}</h1>
        }
        return(
            <>
            {header}
            <form>
                Enter your name: <br/>
                <input name='name' onKeyUp={this.handleInput}/>
            </form>
            </>
        )
       
    }
}