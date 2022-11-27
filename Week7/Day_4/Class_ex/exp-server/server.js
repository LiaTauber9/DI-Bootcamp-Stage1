const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {db} = require('./data/prodacts');

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
    db.select('name', 'price')
  .from('products')
  .then(rows => res.json(rows))
  .catch(e => console.log(e));
})
// //get products with params
app.get('/products/:id', (req,res) => {
    const {id} = req.params;
    db('products')
    .select('name', 'price')
    .where({id:id})
    .then(rows => {
        res.json(rows)
    })
})
// //get products with quary
app.get('/search', (req,res) => {
    const {q} = req.query;
    db('products')
    .select('name', 'price')
    .whereILike('name', `${q}`)
    .then(rows => res.json(rows))
    .catch(err => {
        res.status(404).json()
    })
})
// //post - create a new product
app.post('/products',(req,res) => {
    const {name, price} = req.body;
   db('products')
   .insert({
    name:name,
    price:price
   })
   .returning('*')
   .then(rows => res.json(rows))
   .catch(err => {
    res.status(404).json(err)
})
})
// //update
// app.put('/products/:id', (req,res) => {
//     const {id} = req.params;
//     const {name, price} = req.body;
//     const index = products.findIndex(item => item.id == id);
//     const updatedItem = {
//         id,
//         name,
//         price
//     }
//     products[index] = updatedItem;
//     res.json(products)
// })
// //delete
// app.delete('/products/:id', (req,res) => {
//     const {id} = req.params
//     const index = products.findIndex(item => item.id == id)
//     if(index === -1){
//         res.status(404).json({msg: 'item not found'})
//     }else{
//         products.splice(index, 1)
//         res.json(products)
//     }
// })