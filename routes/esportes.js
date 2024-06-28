var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('voce esta na pagina de esportes');
});

router.get('/futebol', function(req, res, next) {
    res.send('voce esta na pagina de futebol');
  });

  router.get('/boxe', function(req, res, next) {
    res.send('voce esta na pagina de boxe');
  });

  router.get('/surfe', function(req, res, next) {
    res.send('voce esta na pagina de surfe');
  });



module.exports = router;
