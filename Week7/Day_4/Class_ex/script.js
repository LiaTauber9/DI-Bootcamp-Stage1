const fs = require('fs');
//async
fs.readFile('./name', 'utf-8', (err, data) =>{
    if(err){
        console.log('error - ', err);
    }else{
        console.log(data)
    }
})
//synce
fs.readFileSync('./name', 'utf-8', (err, data) =>{
    if(err){
        console.log('error - ', err);
    }else{
        console.log(data)
    }
})

fs.appendFile('./myfile', '12345', (err) => {
    if(err){
        console.log(err);
    }
})

fs.writeFile('./name1', '1234', (err) => {
    if(err){
        console.log(err);
    }
})