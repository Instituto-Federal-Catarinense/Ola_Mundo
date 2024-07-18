var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('musicas');
});

router.get('/funk', function(req, res, next) {
    res.render('funk');
  });

  router.get('/country', function(req, res, next) {
    res.render('country');
  });

  router.get('/bossanova', function(req, res, next) {
    res.render('bossanova');
  });

  router.get('/POPinternacional', function(req, res, next) {
    res.render('POPinternacional');
  });

module.exports = router;
