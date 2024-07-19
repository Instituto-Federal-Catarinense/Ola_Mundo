var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Esportes');
});

router.get('/futebol', function(req, res, next) {
  res.render('futebol');  // Renderiza a página Pug para Futebol
});

router.get('/sinuca', function(req, res, next) {
  res.render('sinuca');  // Renderiza a página Pug para Sinuca
});

router.get('/volei', function(req, res, next) {
  res.render('volei');  // Renderiza a página Pug para Vôlei
});

router.get('/tenis', function(req, res, next) {
  res.render('tenis');  // Renderiza a página Pug para Vôlei
});

router.get('/basquete', function(req, res, next) {
  res.render('basquete');  // Renderiza a página Pug para Vôlei
});

module.exports = router;