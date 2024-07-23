const express = require('express');
const router = express.Router();

/* GET carro listing. */
router.get('/', function(req, res, next) {
  res.render('pista', {title:"Pistas"});
});

router.get('/pista1', function(req, res, next) {
  res.render('pista1', {title:"Le mans"});
});

router.get('/pista2', function(req, res, next) {
  res.render('pista2',{title:"Nurburgring"});
});

router.get('/pista3', function(req, res, next) {
  res.render('pista3', {title:"InterLagos"});
});

router.get('/pista4', function(req, res, next) {
  res.render('pista4', {title:"SPA-FRANCORCHAMPS"});
});

router.get('/pista5', function(req, res, next) {
  res.render('pista5', {title:"MONZA"});
});

module.exports = router;