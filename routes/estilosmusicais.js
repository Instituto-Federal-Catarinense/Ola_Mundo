var express = require('express');
var router = express.Router();

/* GET music styles page. */
router.get('/', function(req, res, next) {
  res.render('estilosmusicais');
});

router.get('/rock', function(req, res, next) {
  res.render('rock');
});

router.get('/pop', function(req, res, next) {
  res.render('pop');
});

router.get('/eletronica', function(req, res, next) {
  res.render('eletronica');
});

router.get('/hip-hop', function(req, res, next) {
  res.render('hip-hop');
});

router.get('/jazz', function(req, res, next) {
  res.render('jazz');
});

module.exports = router;
