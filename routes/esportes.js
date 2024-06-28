var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Página de esportes');
});

router.get('/futebol', function(req, res, next) {
  res.send('Você está na página sobre futebol');
});

router.get('/basquete', function(req, res, next) {
  res.send('Você está na página sobre basquete');
});

router.get('/volei', function(req, res, next) {
  res.send('Você está na página sobre volei');
});

module.exports = router;
