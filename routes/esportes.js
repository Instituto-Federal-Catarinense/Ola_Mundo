var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});
router.get('/volei', function(req, res, next) {
    res.render('volei');
  });
  router.get('/futebol', function(req, res, next) {
    res.render('futebol');
  });
  router.get('/futsal', function(req, res, next) {
    res.render('futsal');
  });
  router.get('/surf', function(req, res, next) {
    res.render('surf');
  });
module.exports = router;
