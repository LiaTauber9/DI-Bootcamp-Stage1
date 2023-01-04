import React from "react";

export class BooksForm extends React.Component{
    constructor(){
        super();
        this.state = {
            title:'',
            about:'',
            genre:'',
            year:'',
            isSubmit:false
        }
    }

    submit=(event)=>{
        event.preventDefault();
        console.log(event.target.title.value);
        this.setState({
            title:event.target.title.value,
            about:event.target.about.value,
            genre:event.target.genre.value,
            year:event.target.year.value
        },()=>console.log(this.state))
    }

    render(){
        return(
           <form onSubmit={this.submit}>
            <h1>New Book</h1>
            Title<input name="title"/>
            About<input name="about"/>
            Genre<input name="genre"/>
            Year Published<input name="year"/>
            <input type='submit' value='Submit'/>
           </form> 
        )
    }
}