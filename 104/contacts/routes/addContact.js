
var express = require('express');
var router = express.Router();

router.post('/addContact', (req, res, next) => {
    console.log(res.body, 'hi');
    res.send({ firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, phone: req.body.phone });
});
module.exports = router;
