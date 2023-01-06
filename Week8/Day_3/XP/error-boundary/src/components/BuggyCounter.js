import React from 'react';

export class BuggyCounter extends React.Component{
    constructor(){
        super();
        this.state = {
            num:0
        }
        this.add = this.add.bind(this)
    }
    
    add(){
        let newNum = Number(this.state.num);
        newNum++;
        console.log(newNum);
        this.setState({num:newNum})
    }
    render(){
        if(this.state.num>=5){
            throw new Error('I crashed!')
        }
        return(
            <button onClick={this.add}>{this.state.num}</button>
        )
    }
   
}