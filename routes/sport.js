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

module.exports = router;
