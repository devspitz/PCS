var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('layout', { title: 'cookies app', partials: { content: 'index' } })
});
module.exports = router;
