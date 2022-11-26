const fs = require('fs');
//Ex 1
fs.readFile('text.txt', 'utf8', (err,data) => {
    console.log(data);
  })
  //Ex 2
 fs.writeFile('data.txt', 'bla bla', () => {})

//Ex 3 
 fs.appendFile('data.txt', ' more bla bla', () => {})

//Ex 4
 fs.unlink('data.txt', () => {})