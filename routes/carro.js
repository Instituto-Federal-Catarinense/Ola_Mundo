const express = require('express');
const router = express.Router();

/* GET carro listing. */
router.get('/', function(req, res, next) {
  res.render('carro', {title:"Porsche"});
});

router.get('/supra', function(req, res, next) {
  res.render('supra', {title:"Toyota"});
});

router.get('/bmw', function(req, res, next) {
  res.render('bmw',{title:"BMW"});
});

router.get('/fusca', function(req, res, next) {
  res.render('fusca', {title:"Fusca"});
});

router.get('/ford', function(req, res, next) {
  res.render('ford', {title:"Ford-GT"});
});

router.get('/impala', function(req, res, next) {
  res.render('impala', {title:"Impala-67"});
});

module.exports = router;