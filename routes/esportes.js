var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/esportes', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.get('/boxe', function(req, res, next) {
    res.send('aba do boxe');
  });
  
  module.exports = router;

  router.get('/futebol', function(req, res, next) {
    res.send('aba do futebol');
  });
  
  module.exports = router;

  router.get('/surfe', function(req, res, next) {
    res.send('aba do surfe');
  });
  
  module.exports = router;
  
