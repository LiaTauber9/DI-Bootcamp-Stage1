const {largeNumber, dateTime} = require('./main.js');

//part 1
const b = 5;
console.log(largeNumber+b);

//part 2
const http = require('http');
const server = http.createServer((req,res) => {
    res.writeHead(200);
    res.end('my first server')
});
server.listen(3000,() => {
    console.log("I'm litening to port 3000");
})

//part 3
console.log(dateTime());