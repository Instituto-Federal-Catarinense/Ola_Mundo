var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('viagens');
});

router.get('/paris', function(req, res, next) {
    res.render('paris');
  });

  router.get('/dubai', function(req, res, next) {
    res.render('dubai');
  });
  
  router.get('/maldivas', function(req, res, next) {
    res.render('maldivas');
  });  

  router.get('/brasil', function(req, res, next) {
    res.render('brasil');
  });

module.exports = router;