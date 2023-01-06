import React from 'react';

export class Color extends React.Component{
    constructor(){
        super();
        this.state ={
            color:'red'
        }
    }

    componentDidMount(){
        setTimeout(()=>{this.setState({color:'yellow'})},3000)
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
  
    //     // Displaying the previous value of the state
    //     document.getElementById('prev').innerHTML =
    //       'Previous favotite color: ' + prevState.color;
    //       return 'snapshot returned'
    //   }

      
      componentDidUpdate(prevProps, prevState, snapshot) {
            document.getElementById('prev').innerHTML =
            'Previous favotite color: ' + prevState.color;
      }


    render(){
        return(
            <>
            <h1>My favorit color is {this.state.color}</h1> 
            <p id='prev'></p>
            </>
        )
    }
        
    
}