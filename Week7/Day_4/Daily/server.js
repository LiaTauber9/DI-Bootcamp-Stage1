const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const app = express();
dotenv.config();
app.listen(process.env.PORT||8080, ()=>{
    console.log(`run on port: ${process.env.PORT||8080}`);
})
app.use(cors());
app.use(express.static(__dirname/'index.html'))