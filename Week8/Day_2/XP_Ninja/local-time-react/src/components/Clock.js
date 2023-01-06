import React from 'react';

export class Clock extends React.Component {
    constructor() {
        super();
        this.interval = ''; 
        this.state = {
           currentDate:''
        }
    }

    componentDidMount(){
       this.interval=setInterval(this.tick,1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

   tick=()=>{
    const currentTime =new Date().toLocaleTimeString('en-IR');
    this.setState({currentDate:currentTime})
   }

    
    render() {
       
        return (
            <p>time: {this.state.currentDate}</p>
        )

    }
}