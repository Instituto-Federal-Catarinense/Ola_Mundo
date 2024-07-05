var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

router.get('/volei', function(req, res, next) {
    res.render('pagina de volei');
  });

  router.get('/basquete', function(req, res, next) {
    res.render('pagina de basquete');
  });

  router.get('/futebol', function(req, res, next) {
    res.render('pagina de futebol');
  });
  
  router.get('/handebol', function(req, res, next) {
    res.render('pagina de handebol');
  });
  

module.exports = router;
