var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/volei', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/sinuca', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/natação', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/boliche', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
