var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('esportes', { title: 'Esportes' });
});

router.get('/futebol', function(req, res, next) {
  res.render('futebol', { title: 'Futebol' });
});

router.get('/basquete', function(req, res, next) {
  res.render('basquete', { title: 'Basquete' });
});

router.get('/tenis', function(req, res, next) {
  res.render('tenis', { title: 'Tenis' });
});

router.get('/volei', function(req, res, next) {
  res.render('volei', { title: 'Volei' });
});

router.get('/xadrez', function(req, res, next) {
  res.render('xadrez', { title: 'Xadrez' });
});

router.get('/e-sports', function(req, res, next) {
  res.render('e-sports', { title: 'E-Sports' });
});

module.exports = router;
