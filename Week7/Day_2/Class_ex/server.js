const http = require('http');
const server = http.createServer((req, res) => {
    console.log('url => '+ req.url);
    console.log('method => ' + req.method)
    if(req.url === '/'){
        res.end('<h1>Home page</h1>')
    }else if(req.url === '/about'){
        res.end('<h1>About page</h1>')
    }else{
        res.end('<h1>404 Not Found</h1>')
    }
   // res.end('helo from my first server')
})
server.listen(5000, () => {
    console.log('server is listening to port 5000')
})