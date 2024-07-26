var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('musica');
});

router.get('/trap', function(req, res, next) {
  res.render('trap');
  });

  
  router.get('/sertanejo', function(req, res, next) {
    res.render('sertanejo');
  });

  
  router.get('/pop', function(req, res, next) {
    res.render('pop');
  });

  
  router.get('/eltronica', function(req, res, next) {
    res.render('eletronica');
  });
  

module.exports = router;