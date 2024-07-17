var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Esportes');
});

router.get('/futebol', function(req, res, next) {
  res.render('futebol');  // Renderiza a página Pug para Futebol
});

router.get('/surf', function(req, res, next) {
  res.render('surf');  // Renderiza a página Pug para Surf
});

router.get('/volei', function(req, res, next) {
  res.render('volei');  // Renderiza a página Pug para Vôlei
});

module.exports = router;