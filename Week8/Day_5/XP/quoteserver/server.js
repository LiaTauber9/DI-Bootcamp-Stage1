
const express = require('express')
const app = express();
const cors = require('cors');

app.listen(3000, ()=>console.log('listen to port 3000'));
app.use(cors());

let currentIndex = null;
console.log(quotes);

function randomQuote(){
    index = Math.floor(Math.random()*quotes.length)
    if(index != currentIndex){
        currentIndex = index;
        return quotes[index]
    }else {randomQuote()}
}