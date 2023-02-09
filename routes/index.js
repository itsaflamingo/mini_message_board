var express = require('express');
var router = express.Router();

const messages = []
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages, });
});

router.post('/new', function(req, res, next) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  messages.push({text: messageText, user: messageUser, added: new Date()});

  res.redirect('/');
})

module.exports = router;
