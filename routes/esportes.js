var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('esportes', { title: 'Esportes' });
});

router.get('/surf', function (req, res, next) {
  res.render('surf', { title: 'Surf' });
});

router.get('/futebol', function (req, res, next) {
  res.render('futebol', { title: 'Futebol' });
});

router.get('/volei', function (req, res, next) {
  res.render('volei', { title: 'Volei' });
});

router.get('/basquete', function (req, res, next) {
  res.render('basquete', { title: 'Basquete' });
});

module.exports = router;
