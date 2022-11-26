const express = require('express');
const app = express();

app.listen(3000);

app.use('/pic', express.static(__dirname + '/public/pic.html'));
app.use('/form', express.static(__dirname+'/public'));
app.use(express.urlencoded({ extended: true }));

app.get('/aboutMe/:hobby', (req,res) => {
    const {hobby} = req.params;
    if(!isNaN(hobby*1)){
        res.status(404).send('error: hobby is not a string')
    } else{
        console.log();
        res.send('your hobby is: '+hobby);
    }
})

app.post('/formData', (req,res) => {
    console.log(req.body)
    const contactMessage = `${req.body.email} sent you a message: '${req.body.message}'`
    res.send(contactMessage)
})