import React from 'react'
import {connect} from 'react-redux';
import { sub } from '../actions';
import { add } from '../actions';

class Counter extends React.Component{
    constructor(props){
        super(props)
    }
    add = () => {}
    sub = () => {}

    render(){
        console.log(this.props)
        return(
            <>
            <button onClick={this.props.add}>+</button>
                <span>{this.props.my_count}</span>
            <button onClick={this.props.sub}>-</button>
            </>
            
        )
    }

}

const mapStataToProps = (state)=>{
    return{
        my_count:state.count
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        add: () => dispatch(add()),
        sub: () => dispatch(sub())
    }
    
}

export default connect(mapStataToProps, mapDispachToProps)(Counter);