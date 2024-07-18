var express = require('express');
var router = express.Router();

/* GET sports page. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

router.get('/volei', function(req, res, next) {
  res.send('Página de Vôlei');
});

router.get('/volei-de-areia', function(req, res, next) {
  res.send('Página de Vôlei de Areia');
});

router.get('/basquete', function(req, res, next) {
  res.send('Página de Basquete');
});

router.get('/futebol', function(req, res, next) {
  res.send('Página de Futebol');
});

router.get('/futebol-de-salao', function(req, res, next) {
  res.send('Página de Futebol de Salão');
});

module.exports = router;
