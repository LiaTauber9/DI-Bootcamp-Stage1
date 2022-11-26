const cors = require('cors');
const express = require('express');
const {prodact} = require('./modules/data.js');
const app = express();
app.listen(5000, () => {
    console.log('running on port 5000');
})
app.use(cors());
app.use('/', express.static(__dirname + '/public'))// will find index.html as defult
app.get('/api/product', (req,res)=>{
    const product = [
        {id:1,name:'iPhone',price:1800},
        {id:2,name:'iPad',price:800},
        {id:3,name:'iWach',price:650}
    ]
    res.json(product)
})
app.get('/api/product/:productId', (req,res) => {
    const product = [
        {id:1,name:'iPhone',price:1800},
        {id:2,name:'iPad',price:800},
        {id:3,name:'iWach',price:650}
    ]
    const {productId} = req.params;
    const oneProduct = product.find(item => {
        return item.id == productId
    })
    if(!oneProduct){
        res.status(404).json({msg:'Product not found'})
    }
    res.json(oneProduct);
})