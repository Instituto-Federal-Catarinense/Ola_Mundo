var express = require('express');
var router = express.Router();

/* Carro. */
router.get('/', function(req, res, next) {
  res.send('Carro');
});

module.exports = router;
