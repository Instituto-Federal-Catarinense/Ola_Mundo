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

router.get('/natacao', function (req, res, next) {
  res.render('natacao', { title: 'Natação' });
});

router.get('/basquete', function (req, res, next) {
  res.render('basquete', { title: 'Basquete' });
});

module.exports = router;