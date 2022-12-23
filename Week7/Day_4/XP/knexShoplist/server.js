const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const knex = require('knex')
const db = knex({
    client: 'pg',
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_DATABASE,
    }
  });

app.listen(process.env.PORT, ()=>{
    console.log('run on port: ', process.env.PORT);
});
app.use('/',express.static( __dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/items',(req,res)=>{
    db.select('name', 'amount')
    .from('shoplist')
    .then(raw=>{
        res.send(raw);
    })
})

app.post('/items',(req,res)=>{
    const newItem = req.body
    db('shoplist')
    .returning(['id','name','amount'])
    .insert({name:req.body.item,amount:req.body.amount||1})
    .then(rows => {
        console.log(rows);
        res.sendFile(__dirname+'/public/index.html')
    })
    .catch(err => {
    console.log(err);
})
})






// db('shoplist')
// .returning('*')
// .where('amount',null)
// .delete('*')
// .then(row=>console.log(row))

// db('shoplist').truncate()
// .then(row=>console.log(row))

//  db.select('id','name', 'amount')
//     .from('shoplist')
//     .then(raw=>{
//         console.log(raw);
//     })
//     .catch(err=>console.log(err));



// db('shoplist')
// .returning(['id','name','amount'])
// .insert({name:'bread',amount:2})
// .then(rows => console.log(rows))
//    .catch(err => {
//     console.log(err);
// })















// const itemsArr = [];

// app.use('/',express.static( __dirname+'/public'));
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.post('/items', (req,res)=>{
//     console.log(req.body);
//     itemsArr.push(req.body);
//     res.sendFile(__dirname+'/public/index.html')
// })
// app.get('/items', (req,res) => {
//     res.json(itemsArr)
// })