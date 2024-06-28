var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Esta é uma página de esportes');
});

router.get('/futebol', function(req, res, next) {
    res.send('Esta é uma página de FUTEBOL');
  });

  router.get('/volei', function(req, res, next) {
    res.send('Esta é uma página de VÔLEI');
  });

  router.get('/judo', function(req, res, next) {
    res.send('Esta é uma página de JUDÔ');
  });

  router.get('/handebol', function(req, res, next) {
    res.send('Esta é uma página de HANDEBOL');
  });
module.exports = router;
