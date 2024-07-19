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
router.get('/basquete', function(req, res, next) {
    res.render('basquete');
  });

  /* GET users listing. */
router.get('/bocha', function(req, res, next) {
    res.render('bocha');
  });

module.exports = router;
