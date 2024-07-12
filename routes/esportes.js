var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esporte', {title: "Página de Esporte"});
});

router.get('/futebol', function(req, res, next) {
  res.render('futebol', {title: "Futebol"});
});

router.get('/volei', function(req, res, next) {
  res.render('volei', {title: "Volei"});
});

router.get('/judo', function(req, res, next) {
  res.render('judo', {title: "Judo"});
});

router.get('/handebol', function(req, res, next) {
  res.render('handebol', {title: "handebol"});
});

router.get('/basquete', function(req, res, next) {
  res.render('basquete', {title: "basquete"});
});

module.exports = router;