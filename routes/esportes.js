var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('dudu');
});

router.get('/futebol', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.get('/boxe', function(req, res, next) {
    res.send('respond with a resource');
  });

  router.get('/surfe', function(req, res, next) {
    res.send('respond with a resource');
  });
module.exports = router;
