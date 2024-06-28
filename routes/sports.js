var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('neymar gostoso');
});
router.get('/futebol', function(req, res, next) {
    res.send('bola da champions');
  });
  router.get('/volei', function(req, res, next) {
    res.send('darlan o melhor');
  });
  router.get('/basquete', function(req, res, next) {
    res.send('lebrow');
  });

module.exports = router;
