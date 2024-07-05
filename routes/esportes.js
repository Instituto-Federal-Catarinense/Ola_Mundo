var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Aqui voce encontrara diversos esportes');
});

router.get('/surf', function(req, res, next) {
    res.send('Surf');
  });

  router.get('/futebol', function(req, res, next) {
    res.send('Futebol');
  });

  router.get('/volei', function(req, res, next) {
    res.send('Volei');
  });

module.exports = router;