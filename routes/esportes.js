var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/surf', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.get('/futebol', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.get('/volei', function(req, res, next) {
    res.send('respond with a resource');
  });

module.exports = router;