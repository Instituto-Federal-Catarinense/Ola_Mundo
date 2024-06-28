var express = require('express');
var router = express.Router();

/* GET esportes listing. */
router.get('/', function(req, res, next) {
  res.send('esportes');
});

module.exports = router;
