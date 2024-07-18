var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

/* GET users listing. */
router.get('/futebol', function(req, res, next) {
  res.render('futebol');
});

/* GET users listing. */
router.get('/volei', function(req, res, next) {
  res.render('volei');
});

/* GET users listing. */
router.get('/futsal', function(req, res, next) {
  res.render('futsal');
});

/* GET users listing. */
router.get('/tenis de mesa', function(req, res, next) {
  res.render('tenis de mesa');
});

/* GET users listing. */
router.get('/natacao', function(req, res, next) {
  res.render('natacao');
});
module.exports = router;
