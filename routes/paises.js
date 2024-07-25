var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('paises');
});

module.exports = router;

/* GET users listing. */
router.get('/paises', function(req, res, next) {
    res.render('paises');
  });
  
  module.exports = router;

  /* GET users listing. */
router.get('/italia', function(req, res, next) {
    res.render('italia');
  });
  
  module.exports = router;

  /* GET users listing. */
router.get('/espanha', function(req, res, next) {
    res.render('espanha');
  });
  
  module.exports = router;

   /* GET users listing. */
router.get('/inglaterra', function(req, res, next) {
    res.render('inglaterra');
  });
  
  module.exports = router;

   /* GET users listing. */
router.get('/estadosunidos', function(req, res, next) {
    res.render('estadosunidos');
  });
  
  module.exports = router;


   /* GET users listing. */
router.get('/grecia', function(req, res, next) {
    res.render('grecia');
  });
  
  module.exports = router;