var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('pagina sobre esportes');
});

router.get('/futebol', function(req, res, next) {
  res.send('pagina sobre futebol');
});

router.get('/basquete', function(req, res, next) {
  res.send('pagina sobre basquete');
});

router.get('/volei', function(req, res, next) {
  res.send('pagina sobre Volei');
});

module.exports = router;
