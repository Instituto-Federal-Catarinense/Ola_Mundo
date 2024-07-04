var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('pagina de esportes');
});

router.get('/futebol', function(req, res, next) {
    res.send('Esse é o esporte futebol');
  });

  router.get('/surf', function(req, res, next) {
    res.send('Esse é o esporte surf');
  });

  router.get('/basquete', function(req, res, next) {
    res.send('Esse é o esporte basquete');
  });

  router.get('/corrida', function(req, res, next) {
    res.send('Esse é o esporte corrida');
  });

module.exports = router;
