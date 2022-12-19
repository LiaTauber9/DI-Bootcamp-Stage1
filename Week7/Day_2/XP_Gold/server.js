const express = require ('express');
const app = express();
app.listen(3001);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/form', express.static(__dirname+'/public'));

console.log('listen to 3001');
app.post('/form', (req,res)=>{
    const user = req.body;
    console.log(user);
    res.send(user)
    
})
