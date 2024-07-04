var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('você está na página de esporte');
});

router.get('/Futebol', function(req, res, next) {
    res.send('você está na página de futebol');
  });

  router.get('/Volei', function(req, res, next) {
    res.send('você está na página de vôlei');
  });

  router.get('/Tenis', function(req, res, next) {
    res.send('você está na página de tênis');
  });

  router.get('/Natacao', function(req, res, next) {
    res.send('você está na página de natação');
  });
module.exports = router;