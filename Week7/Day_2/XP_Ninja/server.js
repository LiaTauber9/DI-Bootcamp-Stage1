const { json } = require('express');
const fs = require('fs');
const data = require ('./data.json')
const express = require('express');
const app = express();
app.listen(3000);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', express.static(__dirname+'/public'))

// const list = [];

app.post('/item',(req,res)=>{
    // list.push({item:req.body.item, price:req.body.price})
    const list = fs.readFileSync('./data.json').toString()|| '[]';
    list = JSON.parse(list);
    list.push({item:req.body.item, price:req.body.price})
    console.log(list);
    fs.writeFileSync('./data.json',JSON.stringify(list),(err)=>{})
    res.sendFile(__dirname+'/public/index.html')
})

app.get('/items', (req,res)=>{
    if(list.length>0){
        res.send(JSON.stringify(list))
    }else{
        res.send('<h1>The list is empty</h1>')
    }
    
})

app.get('/item/:index',(req,res)=>{
    const {index} = req.params;
    console.log(index);
    res.send(list[index])
})