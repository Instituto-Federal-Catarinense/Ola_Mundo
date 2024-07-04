var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('você está na página de esportes');
});

router.get('/futebol', function(req, res, next) {
    res.send('você está na página sobre futebol');
  });

  router.get('/volei', function(req, res, next) {
    res.send('você está na página sobre vôlei');
  });

  router.get('/basquete', function(req, res, next) {
    res.send('você está na página sobre basquete');
  });

  router.get('/handbol', function(req, res, next) {
    res.send('você está na página sobre handbol');
  });
module.exports = router;
