var express = require('express');
var router = express.Router();

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
