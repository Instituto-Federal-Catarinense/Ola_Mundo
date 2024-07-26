var express = require('express');
var router = express.Router();

/* GET musicas listing. */
router.get('/', function(req, res, next) {
  res.render('musicas');
});

router.get('/musica1', function(req, res, next) {
  res.render('musica1');
});

router.get('/musica2', function(req, res, next) {
  res.render('musica2');
});

router.get('/musica3', function(req, res, next) {
  res.render('musica3');
});

router.get('/musica4', function(req, res, next) {
  res.render('musica4');
});

router.get('/musica5', function(req, res, next) {
  res.render('musica5');
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

module.exports = router;
