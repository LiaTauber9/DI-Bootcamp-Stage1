import React from 'react';
import './Tasks.css';

export default class Tasks extends React.Component{
    constructor(){
        super()
        this.state = {
            tasks: [],
            newTask: ""

        }
    }

addTask(e){
    if(e.key=='Enter'){
        const updateTasks = this.state.tasks;
        updateTasks.push(e.target.value);
        e.target.value = '';
        this.setState({tasks:updateTasks})
    }
    }

    deleteTask= (index)=>{
        const updateTasks = this.state.tasks;
        updateTasks.splice(index,1);
        this.setState({tasks:updateTasks})
    }
    


    render(){
        const tasks = this.state.tasks.length > 0 ? this.state.tasks : ["You have no todo's left, yay!"]

        return(
            <>
            {tasks.map((item,index)=>
                <div className='task' key={index}>
                <p onClick={()=>this.deleteTask(index)}>
                    {item}
                </p>
                </div>
            )}
            <input className='task' type='text' onKeyPress={(e)=>this.addTask(e)} placeholder='Add Task' />
            </>
        )
    }
}