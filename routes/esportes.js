var express = require('express');
var router = express.Router();

/* GET esportes page. */
router.get('/', function(req, res, next) {
  res.render('esportes', { title: 'Esportes' });
});

router.get('/Volei', function(req, res, next) {
  res.render('volei', { title: 'Voleibol' });
});

router.get('/VoleiDeAreia', function(req, res, next) {
  res.render('voleiDeAreia', { title: 'Voleibol de Praia' });
});

router.get('/Basquete', function(req, res, next) {
  res.render('basquete', { title: 'Basquete' });
});

router.get('/Futebol', function(req, res, next) {
  res.render('futebol', { title: 'Futebol' });
});

router.get('/Resumo', function(req, res, next) {
  res.render('Resumo', { title: 'Resumo' });
});

module.exports = router;