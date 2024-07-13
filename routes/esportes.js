var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('esporte');
});
router.get('/futebol', function(req, res, next) {
    res.render('futebol');
  });

  router.get('/surf', function(req, res, next) {
    res.render('surf');
  });

  router.get('/volei', function(req, res, next) {
    res.render('volei');
  });
  



module.exports = router;
