// modouls install - npm i bcrypt cookie-parser cors dotenv express jsonwebtoken pg pg-hstore sequelize nodemon

// import jwt from 'jsonwebtoken' 

// const secreteCode = '1111' 
//    //secrete admin signature
// const token = jwt.sign({name:'John', email:'ffd@ggh', id:'123'},secreteCode,{expiresIn:'60s'}) 
//     //payload, secrete admin signature, optional: expiresIn
// jwt.verify(token, secret,(err,decode)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('valid',decode.name);
// })
//    //callBack function to verify, if secrete is not correct or time expired => err

import db from './config/dbElephantsql.js';
import express  from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import users_router from './routs/Users.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(users_router)

app.listen(process.env.PORT||8080)

try{
    await db.authenticate()
    console.log('Database Connected..')
}
catch(e){
    console.log(e);
}

