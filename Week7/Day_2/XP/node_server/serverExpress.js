const express = require('express');
const app = express();
app.get('/', (req,res) => {
    res.send('<h2>get response</h2>')
})
app.listen(3000)