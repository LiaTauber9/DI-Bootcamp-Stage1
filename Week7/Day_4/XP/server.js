const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.listen(process.env.PORT, ()=>{
    console.log('run on port: ', process.env.PORT);
});

const itemsArr = [];

app.use('/',express.static( __dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/items', (req,res)=>{
    console.log(req.body);
    itemsArr.push(req.body);
    res.sendFile(__dirname+'/public/index.html')
})
app.get('/items', (req,res) => {
    res.json(itemsArr)
})