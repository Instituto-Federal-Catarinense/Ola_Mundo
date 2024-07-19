var express = require('express');
var router = express.Router();

// Rota principal de músicas
router.get('/', function(req, res, next) {
  res.send('musicas');
});

// Rota para Rock
router.get('/rock', function(req, res, next) {
  res.render('rock');  // Renderiza a página EJS para Rock
});

// Rota para Pop
router.get('/pop', function(req, res, next) {
  res.render('pop');  // Renderiza a página EJS para Pop
});

// Rota para Hip Hop
router.get('/hiphop', function(req, res, next) {
  res.render('hiphop');  // Renderiza a página EJS para Hip Hop
});

// Rota para Eletrônica
router.get('/eletronica', function(req, res, next) {
  res.render('eletronica');  // Renderiza a página EJS para Eletrônica
});

// Rota para Jazz
router.get('/jazz', function(req, res, next) {
  res.render('jazz');  // Renderiza a página EJS para Jazz
});

module.exports = router;
