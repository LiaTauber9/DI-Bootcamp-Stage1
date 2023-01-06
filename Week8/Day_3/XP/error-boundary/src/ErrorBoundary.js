import React from 'react';

export class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            err:false
        }
    }

    // static getDerivedStateFromError() {
    //     // Update state so the next render will show the fallback UI.
    //     return { err: true };
    //   }
    

    componentDidCatch(error,msg){
        console.log(error, 'msg=>',msg);
        this.setState({err:true})
    }

    render(){
        if(this.state.err){
            console.log('entered error if');
            return(
                <h1>error: </h1>
            )          
        }else{
            console.log('all good');
            return this.props.children
        }
        
    }
   
}