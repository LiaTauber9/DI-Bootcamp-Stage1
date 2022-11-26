const express = require('express');
const app = express();

//Ex 1
app.use('/', express.static(__dirname+'/public'));

app.get('/user', (req,res) => {
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.json(user)
})
console.log('Server running on port 3000');

//Ex 2
app.get('/user/:id', (req,res) => {
    console.log(req.params)
    res.json(req.params)
})
app.listen(3000)