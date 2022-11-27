const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {products} = require('./data/prodacts');
const { product } = require('../../../Day_2/Class_ex/Express_server/modules/data');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(process.env.PORT, ()=> {
    console.log(`run on port ${process.env.PORT}`);
})
//get all products
app.get('/products', (req,res) => {
    res.json(products)
})
//get products with params
app.get('/products/:id', (req,res) => {
    const {id} = req.params;
    const product = products.find(item => item.id == id) 
    if(!product){
        return(res.status(404).json({msg: 'item not found'}))
    }else{
        res.json(product)
    }
})
//get products with quary
app.get('/search', (req,res) => {
    const {q} = req.query;
    const result = products.filter(item => item.name.toLocaleLowerCase().includes(q.toLocaleLowerCase()));
    if(result.length ===0){
        res.status(404).json({msg: 'item not found'})
    }else{
        res.json(result)
    }
})
//post - create a new product
app.post('/products',(req,res) => {
    const {name, price} = req.body;
    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price
    }
    products.push(newProduct)
    res.json(products)
})
//update
app.put('/products/:id', (req,res) => {
    const {id} = req.params;
    const {name, price} = req.body;
    const index = products.findIndex(item => item.id == id);
    const updatedItem = {
        id,
        name,
        price
    }
    products[index] = updatedItem;
    res.json(products)
})
//delete
app.delete('/products/:id', (req,res) => {
    const {id} = req.params
    const index = products.findIndex(item => item.id == id)
    if(index === -1){
        res.status(404).json({msg: 'item not found'})
    }else{
        products.splice(index, 1)
        res.json(products)
    }
})