var express = require('express');
const Cart = require('../cart');
var router = express.Router();

router.use((req, res, next) => {
  const cart = new Cart(req.session.cart);
  req.cart = cart;
  next();
})
/* GET home page. */
router.route('/')
  .get((req, res, next) => {
    res.render('layout', {
      title: 'Express',
      items: global.items,
      partials: {
        content: 'index'
      }
    });
  })
  .post((req, res, next) => {
    console.log('cart', req.cart);
    req.cart.addItem(req.body.id, +req.body.quantity);
    req.session.cart = req.cart;
    res.redirect('/');
  });
router.get('/cart', (req, res, next) => {
  const items = req.cart.getItems();
  const noItems = !items.length;
  const total = items.reduce((acc, item) => acc + Number(item.subtotal), 0);
  res.render('layout', {
    title: 'Cart',
    items: items,
    noItems: noItems,
    total: total,
    partials: {
      content: 'cart'

    }
  })
})

module.exports = router;
