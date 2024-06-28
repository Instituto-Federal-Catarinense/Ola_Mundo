var express = require('express');
var router = express.Router();

/* Foto. */
router.get('/', function(req, res, next) {
  res.send('Toyota Corolla Trueno AE86');
  
});

module.exports = router;
