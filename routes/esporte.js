var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('esporte');
});

router.get('/volei', function(req, res, next) {
  res.render('respond with a resource');
})

router.get('/basket', function(req, res, next) {
  res.render('respond with a resource');
})

module.exports = router;
