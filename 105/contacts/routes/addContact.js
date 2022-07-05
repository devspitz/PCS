
var express = require('express');
var router = express.Router();

router.get('/addContact', (req, res, next) => {
    // res.send('respond with a resource');
    res.render('form', { title: 'My Connections' })//, contacts: contacts });
});

module.exports = router;