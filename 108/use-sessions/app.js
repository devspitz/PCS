var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
let bycrypt = require('/bycrypt')
let pool = require('/pool')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { resourceLimits } = require('worker_threads');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.route('/register')
  .get((req, res, next) => {
    res.render('register');
  })
  .post(require('/register'));

app.post('/login', (req, res, next) => {
  pool.query('SELECT password FROM users WHERE name = ?'),
    [req.body.username, req.body.password]
  if (err) { return next(err) };

  if (!result.length) { return next(new Error('invalid name/pswd')) }
  bycrypt.compare(req.body.password, results[0].password, (err, result) => {
    if (err) { return next(err) };
    if (!result) { return next(new Error('invalid name/pswd')) }
    req.session.user = req.body.username;
    res.redirect('/admin')
  })
});
function sessionOnlyMiddleware(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/')
  }
}
app.use('/admin', sessionOnlyMiddleware, (req, res, next) => {
  res.send('you have entered the site!')
});
app.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
})
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
  res.render('error');
});

module.exports = app;
