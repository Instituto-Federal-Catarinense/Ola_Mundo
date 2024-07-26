var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/fotos', function(req, res, next) {
  res.send('Aqui estão as fotos do usuário');
});

module.exports = router;
