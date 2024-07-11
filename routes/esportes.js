var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

router.get('/futebol', function(req, res, next) {
  res.render('futebol');
  });

  router.get('/volei', function(req, res, next) {
    res.render('volei');
  });

  router.get('/basquete', function(req, res, next) {
    res.render('basquete');
  });

  router.get('/handbol', function(req, res, next) {
    res.render('handbol');
  });
module.exports = router;
