var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-sessions')
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  let visitsMade = req.signedCookies['visits'] ? JSON.parse(req.signedCookies['visits']) : {};
  // console.log(visitsMade);
  const cookieColors = req.signedCookies['colors'] ? JSON.parse(req.signedCookies['colors']) : {};
  const colors = {
    color: req.query.color || cookieColors.color || '#ffffff',
    bgcolor: req.query.bgcolor || cookieColors.bgcolor || '#000000'
  }
  let visit = {//makes cookie 
    visitNumber: visitsMade.visitNumber || 0
  }
  res.cookie('colors', JSON.stringify(colors), { maxAge: 20000, httpOnly: true, signed: true, secure: true });//wont allow you see it in the js, no document.cookie from dom. /make sure hackers wont get into your cookies, therefore use a signed cookie
  res.cookie('visits', JSON.stringify(visit), { maxAge: 20000, httpOnly: true, signed: true, secure: true });//wont allow you see it in the js, no document.cookie from dom. /make sure hackers wont get into your cookies, therefore use a signed cookie
  res.locals.visitNumber = visit.visitNumber;
  res.locals.color = colors.color;
  res.locals.bgcolor = colors.bgcolor;
  next();
})

app.use(session({
  secret:'secret',
  cookie: {
    maxAge: 20000 //can set info about the cookie dont hav to do it
  },
resave: false, //lokinto if you need true or false
saveUninitialized: false //good for log in... whateves
}))

app.use('/', indexRouter);
app.post('/login', (req, res, next) => {
 // if (req.body.name === 'admin' && req.body.password === 'admin') {
    req.session.user = req.body.name;

});
/*app.get('/logout', (req, res, next) => {
    req.session.destroy();
    res.redirect('/') //handles info in session
  
});*/
app.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/')//this actullly will block him
  }
});
/*app.use('/admin', (req, res, next) => {
  res.render('layout', { title: 'cookies app', partials: { content: 'admin' } })
});*/
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('layout', { partials: { content: 'error' } });
});
app.locals.appTitle = "PCS cookies"
module.exports = app;
