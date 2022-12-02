import React from 'react'
export default class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            counter:0
        }
    }
    addCount(){
        this.setState({counter:this.state.counter+1})
    }
    render(){
        if(this.state.counter>5){
            throw Error('counter too big')
        }else{
            return(
                <button onClick={()=>this.addCount()}>count: {this.state.counter}</button>
            )
        }
        
    }
}