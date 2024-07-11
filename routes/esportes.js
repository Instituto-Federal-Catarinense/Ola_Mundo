var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

router.get('/futebol', function(req, res, next) {
    res.render('Página de futebol.');
  });

  router.get('/volei', function(req, res, next) {
    res.render('Página de volei.');
  });
  
  router.get('/basquete', function(req, res, next) {
    res.render('Página de basquete.');
  });  

  router.get('/xadrez', function(req, res, next) {
    res.render('Página de xadrez.');
  });

module.exports = router;