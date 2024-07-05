var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

router.get('/Volêi', function(req, res, next) {
    res.send('Página de Volêi');
  });
  
  router.get('/Volêi de areia', function(req, res, next) {
    res.send('Página de Baseball.');
  });
  
  router.get('/Basquete', function(req, res, next) {
    res.send('Página de Basquete.');
  });
  
  router.get('/Futebol', function(req, res, next) {
    res.send('Página de Futebol');
  });

module.exports = router;