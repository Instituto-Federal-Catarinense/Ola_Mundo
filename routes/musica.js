var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('musica');
});

router.get('/ACDC', function(req, res, next) {
  res.render('ACDC');
});

router.get('/metalica', function(req, res, next) {
  res.render('metalica');
});

router.get('/blacksabbath', function(req, res, next) {
  res.render('blacksabbath');
});

router.get('/ledzeppelin', function(req, res, next) {
  res.render('ledzeppelin');
});

router.get('/titas', function(req, res, next) {
  res.render('titas');
});


module.exports = router;