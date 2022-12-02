import React from 'react';
import './Tasks.css';

export default class Task extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
           <div className='task'>
            <p onClick={()=>this.props.deleteTask(this.props.index)}>
                {this.props.item}
            </p>
            </div>
        )
    }
}