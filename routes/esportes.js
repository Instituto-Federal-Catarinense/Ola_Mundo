var express = require('express');
var router = express.Router();

// Rota principal para renderizar a página inicial (esportes.pug)
router.get('/', function(req, res, next) {
  res.render('esportes');
});

// Rota para o rebaixamento de 1991
router.get('/rebaixamento/1991', function(req, res, next) {
  res.render('rebaixamento1', {
    title: 'Rebaixamento 1991 - Grêmio',
    season: 'Temporada 1991',
    description: 'Na temporada de 1991, o Grêmio foi rebaixado pela primeira vez em sua história, terminando em 25º lugar no Campeonato Brasileiro.'
  });
});

// Rota para o rebaixamento de 2004
router.get('/rebaixamento/2004', function(req, res, next) {
  res.render('rebaixamento2', {
    title: 'Rebaixamento 2004 - Grêmio',
    season: 'Temporada 2004',
    description: 'Em 2004, o Grêmio foi novamente rebaixado no Campeonato Brasileiro, após uma campanha complicada.'
  });
});

// Rota para o rebaixamento de 2012
router.get('/rebaixamento/2012', function(req, res, next) {
  res.render('rebaixamento3', {
    title: 'Rebaixamento 2012 - Grêmio',
    season: 'Temporada 2012',
    description: 'Na temporada de 2012, o Grêmio enfrentou seu terceiro rebaixamento, novamente no Campeonato Brasileiro, encerrando uma série de participações consecutivas na elite do futebol brasileiro.'
  });
});

module.exports = router;
