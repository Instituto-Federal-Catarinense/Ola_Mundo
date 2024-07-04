var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('página de esportes');
});

router.get('/volei', function(req, res, next) {
    res.send('página de vôlei');
  });

  
  router.get('/basquete', function(req, res, next) {
    res.send('página de basquete');
  });

  
  router.get('/golfe', function(req, res, next) {
    res.send('página de golfe');
  });

  
  router.get('/beachtenis', function(req, res, next) {
    res.send('página de beach tênis');
  });
  

module.exports = router;