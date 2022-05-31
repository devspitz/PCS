const http = require('http');

http.createServer((req, res) => {
    const baseUrl = 'http://' + req.headers.host;
    const url = new URL(req.url, baseUrl);
    const iso = url.searchParams.get('iso');

    const theDate = new Date(iso);


    if (req.url === '') {
        res.write('');
    } else if (req.url === '/api/parsetime') {
        res.write('/api/parsetime');
    } else if (req.url === '/api/unixtime') {
        res.write('/api/unixtime');
    } else {
        res.write('404, no such endpoint');
    }
}).listen(80)