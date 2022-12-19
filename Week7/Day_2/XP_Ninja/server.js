const { json } = require('express');
const express = require('express');
const app = express();
app.listen(3000);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', express.static(__dirname+'/public'))

const list = [];

app.post('/item',(req,res)=>{
    // console.log(req.body);
    list.push({item:req.body.item, price:req.body.price})
    console.log(list);
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