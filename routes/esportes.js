var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('volei', function(req, res, next) {
    res.send('Essa é a página de vôlei');
  });
  router.get('/futsal', function(req, res, next) {
    res.send('Essa é a página de futsal');
  });
  router.get('/futebol', function(req, res, next) {
    res.send('Essa é a página de futebol');
  });
  router.get('/handebol', function(req, res, next) {
    res.send('Essa é a página de handebol');
  });


module.exports = router;
