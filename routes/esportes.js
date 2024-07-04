var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Você está na página de esportes!');
});

router.get('/surf', function(req, res, next) {
    res.send('Você está na página de surf!');
  });

  router.get('/motocross', function(req, res, next) {
    res.send('Você está na página de motocross!');
  });

  router.get('/futebol', function(req, res, next) {
    res.send('Você está na página de futebol!');
  });
  router.get('/volei', function(req, res, next) {
    res.send('Você está na página de volei!');
  });

module.exports = router;