var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Aqui sairam os usuarios');
});

module.exports = router;
