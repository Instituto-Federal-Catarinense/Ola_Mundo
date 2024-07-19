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

router.get('/subrota1', function(req, res, next) {
  res.render('subrota1', { title: 'Subrota1' });
});

router.get('/subrota2', function(req, res, next) {
  res.render('subrota2', { title: 'Subrota2' });
});

router.get('/subrota3', function(req, res, next) {
  res.render('subrota3', { title: 'Subrota3' });
});

router.get('/subrota4', function(req, res, next) {
  res.render('subrota4', { title: 'Subrota4' });
});

router.get('/subrota5', function(req, res, next) {
  res.render('subrota5', { title: 'Subrota5' });
});


module.exports = router;
