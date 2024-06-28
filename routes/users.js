var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('voce esta na pagina de esportes');
});

router.get('/esportes', function(req, res, next) {
  res.send('voce esta na pagina de esportes');
});

router.get('/basquete', function(req, res, next) {
  res.send('voce esta na pagina de basquete');
});

router.get('/futebol', function(req, res, next) {
  res.send('voce esta na pagina de futebol');
});

router.get('/volei', function(req, res, next) {
  res.send('voce esta na pagina de volei');
});

module.exports = router;
