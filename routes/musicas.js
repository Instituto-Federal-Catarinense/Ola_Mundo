var express = require('express');
var router = express.Router();

// Rota principal para listar músicas
router.get('/', function(req, res, next) {
  res.render('musicas', {
    title: 'Lista de Músicas'
  });
});

// Rota para o Hino do Inter
router.get('/hino-do-inter', function(req, res, next) {
  res.render('hino-do-inter', {
    title: 'Hino do Inter',
    lyrics: `Letra do Hino do Inter`
  });
});

// Rota para Despacito
router.get('/despacito', function(req, res, next) {
  res.render('despacito', {
    title: 'Despacito',
    lyrics: `Letra de Despacito`
  });
});

// Rota para Brooklyn Baby
router.get('/brooklyn-baby', function(req, res, next) {
  res.render('brooklyn-baby', {
    title: 'Brooklyn Baby',
    lyrics: `Letra de Brooklyn Baby`
  });
});

// Rota para Máquina do Tempo
router.get('/maquina-do-tempo', function(req, res, next) {
  res.render('maquina-do-tempo', {
    title: 'Máquina do Tempo',
    lyrics: `Letra de Máquina do Tempo (Matue)`
  });
});

// Rota para Tranquilamente (TF)
router.get('/tranquilamente', function(req, res, next) {
  res.render('tranquilamente', {
    title: 'Tranquilamente (TF)',
    lyrics: `Letra de Tranquilamente (TF)`
  });
});

module.exports = router;
