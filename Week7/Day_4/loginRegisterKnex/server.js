const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const knex = require('knex');
const db =  knex({
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 5432,
      user : 'postgres',
      password : '31211',
      database : 'postgres'
    }
  });
  const saltRounds = 10;
  const app = express();
  app.listen(3000);
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended:false}));
  app.use('/', express.static(__dirname+'/public'));


  app.post('/register',async(req,res)=>{
    const details = req.body;
    console.log(details);
    let {firstname,lastname,email,username,password} = req.body;
    db.select('username','password')
    .from('users')
    .where('username',username)
    .then(data=>{
       if(data.length>0){
        res.status(405).json({msg:'User name allready exist'});
       }
       else{async()=>{
        try{
            const salt = await bcrypt.genSalt();
            password = await bcrypt.hash(password,salt);
            console.log('hash=>',password);   
        }catch{
            console.log('couldnt hash');
        }
    
        db('users').returning('*').insert({firstname,lastname,email,username,password})
            .then(result=>{
                console.log(result);
                res.json({msg:'register succeed'})
            })
            .catch(err=>res.status(404).json({msg:'couldnt store your details'}))
       }
       }
    })
  })


  app.post('/login',(req,res)=>{
    const usernameInput = req.body.username;
    const passwordInput = req.body.password;
    console.log(usernameInput,' ',passwordInput);

    db.select('username','password')
    .from('users')
    .where('username',usernameInput)
    .then(data=>{
        bcrypt.compare(passwordInput, data[0].password, function(err, result) {
            if(result){
                res.status(200).json({msg:'you are logged in'})
            }else{
                console.log(err);
                res.status(401).json({msg:'password is not correct'})
            }
        });
    })
    .catch(()=>{res.status(400).json({msg:'User name not found'})})
  })



  