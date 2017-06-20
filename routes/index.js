var express = require('express');
var router = express.Router();
const message = require('../service/botservice.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/keyboard', function(req, res) {
  {
      type: 'buttons',
      buttons: ["메뉴2", "메뉴2", "메뉴3"]
  };

  res.set({
      'content-type': 'application/json'
  }).send(JSON.stringify(message.buttonsType()));
});

module.exports = router;
