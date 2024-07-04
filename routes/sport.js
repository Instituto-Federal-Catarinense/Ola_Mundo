var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Esportes');
});

router.get('/surf', function(req, res, next) {
    res.send('surf');
  });
  
  router.get('/futebol', function(req, res, next) {
    res.send('futebol');
  });
  router.get('/jiu-jitsu', function(req, res, next) {
    res.send('jiu-jitsu');
  });
  router.get('/rugby', function(req, res, next) {
    res.send('rugby');
  });



module.exports = router;
