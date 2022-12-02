import React from 'react'

export default class App extends React.Component{
    constructor(){
        super()
        this.state =  {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        } 
    }

    add = (event)=>{
        const i = event.target.key
        console.log(this.state.languages[i])
        
    }

    render(){
        return(
            this.state.languages.map(item,index=>{
                <div>
                    <div>{item.votes}</div>
                    <div>{item.name}</div>
                    <button key={index}>Click Here</button>
                </div>
            })
        )
    }
}