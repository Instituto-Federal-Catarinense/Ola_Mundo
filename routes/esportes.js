var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/futebol', function(req, res, next) {
  res.send('Aqui é a página de futebol');
});
router.get('/volei', function(req, res, next) {
  res.send('Aqui é a página de vôlei');
});
router.get('/basquete', function(req, res, next) {
  res.send('Aqui é a página de basquete');
});
router.get('/handebol', function(req, res, next) {
  res.send('Aqui é a página de handebol');
});
module.exports = router;
