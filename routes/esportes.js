var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('esportes');
  });

/* GET home page. */
router.get('/futebol', function(req, res, next) {
    res.send('voce esta na pagina de futebol');
  });


/* GET home page. */
router.get('/volei', function(req, res, next) {
    res.send('voce esta na pagina de volei');
  });


/* GET home page. */
router.get('/basquete', function(req, res, next) {
    res.send('voce esta na página de basquete');
  });

module.exports = router;