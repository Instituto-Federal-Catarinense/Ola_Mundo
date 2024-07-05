var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

router.get('/boxe', function(req, res, next) {
    res.send('aba do boxe');
  });
  
  router.get('/futebol', function(req, res, next) {
    res.send('aba do futebol');
  });

  router.get('/surfe', function(req, res, next) {
    res.send('aba do surfe');
  });
  
  module.exports = router;
  
