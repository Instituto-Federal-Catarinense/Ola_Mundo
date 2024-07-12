var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

router.get('/futebol', function(req, res, next) {
  res.render('futebol');
});

router.get('/boxe', function(req, res, next) {
  res.render('boxe');
});

router.get('/surf', function(req, res, next) {
  res.send('surf');
});


module.exports = router;