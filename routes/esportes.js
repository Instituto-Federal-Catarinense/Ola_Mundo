var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Página de esportes.');
});

router.get('/futebol', function(req, res, next) {
    res.send('Página de futebol.');
  });

  router.get('/volei', function(req, res, next) {
    res.send('Página de volei.');
  });
  
  router.get('/basquete', function(req, res, next) {
    res.send('Página de basquete.');
  });  

  router.get('/xadrez', function(req, res, next) {
    res.send('Página de xadrez.');
  });

module.exports = router;