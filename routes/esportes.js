var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

router.get('/volei', function(req, res, next) {
  res.render('volei');
  });

  
  router.get('/basquete', function(req, res, next) {
    res.render('basquete');
  });

  
  router.get('/golfe', function(req, res, next) {
    res.render('golfe');
  });

  
  router.get('/danca', function(req, res, next) {
    res.render('danca');
  });


  router.get('/hoquei', function(req, res, next) {
    res.render('hoquei');
  });
  

module.exports = router;