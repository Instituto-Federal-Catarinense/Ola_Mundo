var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('livros');
});

/* GET users listing. */
router.get('/Ate_o_verao_terminar', function(req, res, next) {
  res.render('Ate_o_verao_terminar');
});

/* GET users listing. */
router.get('/E_assim_que_acaba', function(req, res, next) {
  res.render('E_assim_que_acaba');
});

/* GET users listing. */
router.get('/E_assim_que_comeca', function(req, res, next) {
  res.render('E_assim_que_comeca');
});

/* GET users listing. */
router.get('/Verity', function(req, res, next) {
  res.render('Verity');
});

/* GET users listing. */
router.get('/Todas_as_suas_imperfeicoes', function(req, res, next) {
  res.render('Todas_as_suas_imperfeicoes');
});
module.exports = router;
