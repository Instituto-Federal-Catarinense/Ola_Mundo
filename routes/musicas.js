var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('musicas');
});
router.get('/rock', function(req, res, next) {
    res.render('rock');
  });
  router.get('/funk', function(req, res, next) {
    res.render('funk');
  });
  router.get('/samba', function(req, res, next) {
    res.render('samba');
  });
  router.get('/rap', function(req, res, next) {
    res.render('rap');
  });

module.exports = router;
