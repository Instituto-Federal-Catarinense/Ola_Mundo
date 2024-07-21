var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/volei', function(req, res, next) {
  res.send('Esta é a pagina de Volei');
});

/* GET users listing. */
router.get('/sinuca', function(req, res, next) {
  res.send('Esta é a pagina de Sinuca');
});

/* GET users listing. */
router.get('/natação', function(req, res, next) {
  res.send('Esta é a pagina de Natação');
});

/* GET users listing. */
router.get('/boliche', function(req, res, next) {
  res.send('Esta é a pagina de Boliche');
});

module.exports = router;
