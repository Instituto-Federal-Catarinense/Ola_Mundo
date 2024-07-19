var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('musica');
});

router.get('/mpb', function(req, res, next) {
  res.render('mpb');  
});

router.get('/jazz', function(req, res, next) {
  res.render('jazz');  
});

router.get('/pop', function(req, res, next) {
  res.render('pop');  
});

router.get('/rock', function(req, res, next) {
  res.render('rock');  
});

router.get('/kpop', function(req, res, next) {
  res.render('kpop');  
});


module.exports = router;