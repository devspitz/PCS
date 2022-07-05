var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret',
  /*cookie: {
    maxAge: 20000,
    secure: true
  }*/
  resave: false,
  saveUninitialized: false
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
/*app.use('/cart', (req, res, next) => {
  //**maybe because if how the session is stored in key value pairs, doesn't work
  let cartItems = req.session.cart.items;
  let storeItems = global.items
  let items = [];
  storeItems.forEach(item => {
    for (let i = 0; i < cartItems.length; i++) {
      if (item.id === cartItems[i].id) {
        items.push(item[i]);
        console.log('added!')
      }
    }
  });
  res.render('cart', { title: 'Cart', items: items })
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
  res.render('error');
});

global.items = [{
  id: 1,
  name: 'Burger',
  description: 'grilled to perfection',
  price: 2.99,
  img: '/burger.png'
}, {
  id: 2,
  name: 'Chicken',
  description: 'A delicious chicken main',
  price: 1.99,
  img: '/chicken.png'
}];

module.exports = app;
