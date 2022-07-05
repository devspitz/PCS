const { json } = require('express');
var express = require('express');
var router = express.Router();

const contacts = [
  {
    firstName: 'Ehud',
    lastName: 'Kogan',
    email: 'spitzdev@gmail.com',
    phone: '516-401-4867'
  }, {
    firstName: 'Devora',
    lastName: 'Kogan',
    email: 'spitzdev@gmail.com',
    phone: '216-867-4782'
  }
]

/* GET home page. */
router.get('/contacts', (req, res, next) => {
  res.render('index', { title: 'My Connections', contacts: contacts });
});
router.get('/addContact', (req, res, next) => {
  // res.send('respond with a resource');

  res.render('form', { title: 'My Connections' })//, contacts: contacts });

});

router.get('/api/contacts', (req, res, next) => {
  let jsonContacts = res.json(contacts);
  res.send(jsonContacts);
});

router.post('/addContact', (req, res, next) => {
  contacts.push(req.body)
  res.redirect('/contacts');
});
module.exports = router;
