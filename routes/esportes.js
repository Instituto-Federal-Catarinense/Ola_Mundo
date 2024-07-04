var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/volei', function(req, res, next) {
    res.send('página de vôlei');
  });
  router.get('/futebol', function(req, res, next) {
    res.send('página de futebol');
  });
  router.get('/futsal', function(req, res, next) {
    res.send('página de futsal');
  });
module.exports = router;
