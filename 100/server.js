const http = require('http');

http.createServer((req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    // also together you can write res.writeHead(404, {'content-type, 'text/plain'})
    // res.write('hello world');
    res.write('page not found');
    res.end;
}).listen(80);