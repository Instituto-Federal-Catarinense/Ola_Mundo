var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esportes', {title:'esportes', img:'/imagens/esportes.jpeg'});
});

router.get('/futebol', function(req, res, next) {
  res.render('esportes', {title:'galinho', img:'/imagens/galinho.webp'});
});

router.get('/basquete', function(req, res, next) {
  res.render('esportes', {title:'lembrou?', img:'/imagens/lembro.jpg'});
});

router.get('/volei', function(req, res, next) {
  res.render('esportes', {title:'volei', img:'/imagens/volei.jpeg'});
});

router.get('/sinuca', function(req, res, next) {
  res.render('esportes', {title:'sinuquers', img:'/imagens/bahia.webp'});
});

module.exports = router;
