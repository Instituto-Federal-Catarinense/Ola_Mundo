var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('voce esta na pagina de esportes');
});

router.get('/futebol', function(req, res, next) {
    res.send('futebor copaaaa 4 minutossss');
  });

  router.get('/surf', function(req, res, next) {
    res.send('surffff caduuuuu pinguimmm');
  });

  router.get('/volei', function(req, res, next) {
    res.send('anime de baitola');
  });



module.exports = router;
