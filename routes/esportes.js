var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Aqui é a página de esportes');
});
router.get('/volei', function(req, res, next) {
    res.send('Aqui é a página de volei');
  });
  router.get('/futebol', function(req, res, next) {
    res.send('Aqui é a página de futebol');
  });
  router.get('/futsal', function(req, res, next) {
    res.send('Aqui é a página de futsal');
  });
  router.get('/basquete', function(req, res, next) {
    res.send('Aqui é a página de basquete');
  });

module.exports = router;
