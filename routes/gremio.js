var express = require('express');
var router = express.Router();

/* Grêmio. */
router.get('/', function(req, res, next) {
  res.send('Grêmio ta ruim');
});

module.exports = router;
