var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('musicas');
});

router.get('/pop', function(req, res, next) {
  res.render('pop');
  });

  
  router.get('/rap', function(req, res, next) {
    res.render('rap');
  });

  
  router.get('/rock', function(req, res, next) {
    res.render('rock');
  });

  
  router.get('/sertanjo', function(req, res, next) {
    res.render('sertanejo');
  });
  
  router.get('/reggaeton', function(req, res, next) {
    res.render('reggaeton');
  });

module.exports = router;