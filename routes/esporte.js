var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('esporte');
});

router.get('/handball', function(req, res, next) {
  res.render('handball');
})

router.get('/polo', function(req, res, next) {
  res.render('respond with a resource');
})

module.exports = router;
