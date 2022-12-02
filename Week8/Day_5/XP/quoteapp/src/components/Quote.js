import quotes from '../data/data';
import React from 'react';
import './Quote.css'
import axios from 'axios'

export default class Quote extends React.Component{
    constructor(){
        super();
        this.state = {
            quote:'',
            author:'',
            color:'red',
            index: 0
        }
    }
    getQuote(){
        const newIndex = Math.floor(Math.random()*quotes.length);
        if(newIndex != this.state.index){
            this.state.index = newIndex;
            return quotes[newIndex]
        }else{this.getQuote()}
    }
    getColor(){
        const colors = [0,0,0];
        const randomColors = colors.map(num => Math.floor(Math.random()*256))
        return `rgb(${[...randomColors]})`
    }

    newQuote = ()=>{
       const quote = this.getQuote();
       this.getColor();
       this.setState({quote:quote.quote, author:quote.author,color:this.getColor()})
    }
    render(){
        return(
            <div className='background' style={{backgroundColor:this.state.color}}>
                 <div className='div'>
                    <h1 style={{color:this.state.color}}>{this.state.quote}</h1>
                    <h4>{this.state.author}</h4><br/>
                    <button style={{backgroundColor:this.state.color}} onClick={this.newQuote}>new quote</button>
                 </div>

            </div>
           
        )
    }

}
console.log(quotes);