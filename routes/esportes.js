var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('esportes', { title: 'esporte' });
});

/* GET users listing. */
router.get('/volei', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/fut', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/tenis-de-quadra', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/capoeira', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
