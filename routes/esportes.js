var express = require('express');
var router = express.Router();

/* GET esportes listing. */
router.get('/', function(req, res, next) {
  res.send('esportes');
});

router.get('/futebol', function(req, res, next) {
  res.send('futebol');
});

router.get('/boxe', function(req, res, next) {
  res.send('boxe');
});

router.get('/natacao', function(req, res, next) {
  res.send('natação');
});

router.get('/ciclismo', function(req, res, next) {
  res.send('ciclismo');
});


module.exports = router;
