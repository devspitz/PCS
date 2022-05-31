const { URL } = require('url');

const app = require('connect')();

app.use((req, res, next) => {
    res.write('hello');
    next();
});

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    next();
})

app.use(require('./queryParser'));

res.use((req, res, next) => {
    const baseUrl = 'http://' + req.headers.host;
    const url = new URL(req.url, baseUrl);
    const name = req.searchParams.get('magicWord')
    if (name === 'please') {
        next();
    }
    else {
        throw { statusCode: 400, message: 'How dare you not use the magic word????!!!!' }
    }
})

app.use('/index.html', (req, res, next) => {
    res.write('hello');
    next();
});
app.use('/aboutUs.html', (req, res, next) => {
    res.write('hello');
    next();
});
app.use('/contactForm.html', (req, res, next) => {
    res.write('hello');
    next();
});
app.use(error, (req, res, next) => {
    res.statusCode = error.statusCode || 500;
    res.statusCode =
        res.write(`we have gotten a serious issue: ${error.message}`);
    end();
})


app.listen(80);