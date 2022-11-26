// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/
const { create } = require('domain');
const http = require('http');
const server = http.createServer((req,res) => {
    console.log('server');
    res.write('<h1>Hello</h1>');
    res.write('<h1>Hello2</h1>');
    res.write('<h5>Hello3</h5>');
    res.end();
})
server.listen(3000);
console.log('listening to port 3000');