const express = require ('express');
const cors = require ('cors');
const axios = require('axios');
const dotenv = require('dotenv')
const app = express();

dotenv.config();

app.listen(process.env.PORT || 8080,()=>console.log('port',process.env.PORT));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', express.static(__dirname+'/public'));

const getRobots = async()=>{
    try{
        const response = await axios.get('http://jsonplaceholder.typicode.com/users');
        return response
    } catch(e){
        console.log(e);
    }
}

// axios.get('http://jsonplaceholder.typicode.com/users',{Headers:{'Accept-Encoding': 'gzip,deflate,compress'
// }})
// .then(res=>{console.log(res.data)})
// .catch(e=>{console.log(e.message)})
        

// const getRobots = async()=>{
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         return data
//     } catch(e){
//         console.log(e);
//     }
// }




app.get('/:input',(req,res)=>{
    const {input}=req.params;
    getRobots()
.then(data=>{
    const response = data.data.filter(item=>item.name.toLowerCase().includes(input.toLowerCase()));
    console.log('response=>',response);
    res.send(response);
})
.catch(e=>res.status(404).json({msg:'no users found'}))  
})
