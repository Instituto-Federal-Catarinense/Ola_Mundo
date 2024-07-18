var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Página Inicial' });
});

router.get('/surf', function(req, res, next) {
  res.render('surf', { title: 'Surf' });
});

router.get('/futebol', function(req, res, next) {
  res.render('futebol', { title: 'Futebol' });
});

router.get('/volei', function(req, res, next) {
  res.render('volei', { title: 'Vôlei' });
});

router.get('/basquete', function(req, res, next) {
  res.render('basquete', { title: 'Basquete' });
});

router.get('/handebol', function(req, res, next) {
  res.render('handebol', { title: 'Handebol' });
});

module.exports = router;
