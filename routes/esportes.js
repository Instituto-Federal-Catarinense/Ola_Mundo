var express = require('express');
var router = express.Router();

/* GET sports page. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

router.get('/volei', function(req, res, next) {
  res.render('volei');
});

router.get('/volei-de-areia', function(req, res, next) {
  res.render('volei-de-areia');
});

router.get('/basquete', function(req, res, next) {
  res.render('basquete');
});

router.get('/futebol', function(req, res, next) {
  res.render('futebol');
});

router.get('/futebol-de-salao', function(req, res, next) {
  res.render('futebol-de-salao');
});

module.exports = router;