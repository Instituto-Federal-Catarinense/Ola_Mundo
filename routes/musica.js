var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('musica', {title: "Página de musica"});
});

router.get('/rock', function(req, res, next) {
  res.render('rock', {title: "rock"});
});

router.get('/pop', function(req, res, next) {
  res.render('pop', {title: "pop"});
});

router.get('/sertanejo', function(req, res, next) {
  res.render('sertanejo', {title: "sertanejo"});
});

router.get('/funk', function(req, res, next) {
  res.render('funk', {title: "funk"});
});

router.get('/jazz', function(req, res, next) {
  res.render('jazz', {title: "jazz"});
});

module.exports = router;