var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Lista de melhores esportes');
  });
  
  router.get('/Volêi', function(req, res, next) {
      res.send('Primeiro: volei');
    });
    
    router.get('/Volêi de areia', function(req, res, next) {
      res.send('segundo: futebol');
    });
    
    router.get('/Basquete', function(req, res, next) {
      res.send('terceiro: basquete');
    });
    
    router.get('/Futebol', function(req, res, next) {
      res.send('quarta: handebol');
    });
  
  module.exports = router;
module.exports = router;
