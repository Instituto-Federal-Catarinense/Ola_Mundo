var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Você está na página de esportes');
});

/* GET users listing. */
router.get('/futebol', function(req, res, next) {
  res.send('Você está na página de Futebol');
});

/* GET users listing. */
router.get('/volei', function(req, res, next) {
    res.send('Você está na página de Vôlei');
  });

  /* GET users listing. */
router.get('/basquete', function(req, res, next) {
    res.send('Você está na página de Basquete');
  });

  /* GET users listing. */
router.get('/Bocha', function(req, res, next) {
    res.send('Você está na página de Bocha');
  });

module.exports = router;
