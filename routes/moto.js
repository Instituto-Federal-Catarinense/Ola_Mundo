var express = require('express');
var router = express.Router();

/* Moto. */
router.get('/', function(req, res, next) {
  res.send('Moto');
});

module.exports = router;
