import React from 'react'
import {connect} from 'react-redux';
import { sub, add } from '../actions';
import Increase from './Increase';
import Decrease from './Decrease';

class Counter extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        return(
            <>
            <Increase />
                <span>{this.props.my_count}</span>
                <Decrease />
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