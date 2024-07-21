var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

router.get('/futebol', function(req, res, next) {
    res.render('futebol');
  });

  router.get('/surf', function(req, res, next) {
    res.render('surf');
  });

  router.get('/basquete', function(req, res, next) {
    res.render('basquete');
  });

  router.get('/corrida', function(req, res, next) {
    res.render('corrida');
  });

module.exports = router;
