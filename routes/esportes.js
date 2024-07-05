var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

/* GET users listing. */
router.get('/futebol', function(req, res, next) {
  res.render('Você esta na página de futebol');
});

module.exports = router;
