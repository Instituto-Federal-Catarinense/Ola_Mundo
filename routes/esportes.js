var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Esportes');
  });

router.get('/futebol', function(req, res, next) {
  res.send('futebas');
});

router.get('/sinuca', function(req, res, next) {
    res.send('8pool');
  });

  router.get('/volei', function(req, res, next) {
    res.send('Voleizada');
  });
  
module.exports = router;
