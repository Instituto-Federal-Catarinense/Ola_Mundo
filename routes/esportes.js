var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Esportes');
});

router.get('/futebol', function(req, res, next) {
  res.render('futebol');  
});

router.get('/surf', function(req, res, next) {
  res.render('surf');  
});

router.get('/volei', function(req, res, next) {
  res.render('volei');  
});

router.get('/peteca', function(req, res, next) {
  res.render('peteca');  
});

router.get('/hoquei', function(req, res, next) {
  res.render('hoquei');  
});


module.exports = router;