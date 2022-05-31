const { URL } = require('url');

const app = require('connect')();

app.use(require('./logger'));
/*//works in order that they got added(not for sure in order(can use chianing))
 app.use((req, res,next)=> {
     res.write('hello');
     next();
 });
app.use((req, res, next) => {
    res.write('middle');
    next();
})
app.use('/middle', (req, res, next) => {
    res.end('bye');
})
//middle only works o\if middle is in the endpoint(in the urls)
*/
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    next();
})

app.use(require('./queryParser'))//import midddleware
app.use('/index.html', (req, res, next) => {
    res.write('this is the home page');
    next();
})
app.use('/pcs.html', (req, res, next) => {
    res.write('this is the pcs page');
    next();
})

app.use((req, res, next) => {
    res.end('The end!');

})

app.use('/makeError', (req, res, next) => {
    //for somonewho never went into the mounts, cuz you never got a next()
    foo();//it'l give you an error page

})
res.use('/sayHey', (req, res, next) => {
    const baseUrl = 'http://' + req.headers.host;
    const url = new URL(req.url, baseUrl);
    const name = req.searchParams.get('name') || 'stranger'
    res.end(`heyyyyyyyyyyyyyyy ${name}`);
})

app.use((req, res, next) => {
    //for somonewho never went into the mounts, cuz you never got a next()
    // res.statusCode=404;
    //res.end('issues, no page found');
    //throw new Error ({statusCode: 400, message: 'page not found'})
    throw { statusCode: 400, message: 'page not found' }
})
//with parmeter error, only happens if error
app.use(error, (req, res, next) => {
    res.statusCode = error.statusCode || 500;
    res.statusCode =
        res.write(`my own error page, error: ${error.message}`);
    //(error)//goes to next part of erroe chain
    next();//goes to next part of middleware if you x want to handle error
})
app.use(error, (req, res, next) => {
    res.statusCode = 500;
    res.end(`next part of my own error page, error: ${error.message}`);
})

app.listen(80);

//btw you can only set headers at beginnig, befor any html