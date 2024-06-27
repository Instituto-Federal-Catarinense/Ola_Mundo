var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Aqui são os usuarios do sistema.');
});

module.exports = router;
