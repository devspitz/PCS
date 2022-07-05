var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.route('/')
  .get((req, res, next) => {
    res.render('index', { title: 'Express' });
  })

module.exports = router;
