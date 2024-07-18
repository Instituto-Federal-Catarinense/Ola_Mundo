var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('praias');
});
router.get('/fernando-de-noronha', function(req, res, next) {
    res.render('fernando-de-noronha');
  });
  router.get('/arraial-do-cabo', function(req, res, next) {
    res.render('arraial-do-cabo');
  });
  router.get('/maragogi', function(req, res, next) {
    res.render('maragogi');
  });
  router.get('/buzios', function(req, res, next) {
    res.render('buzios');
  });
  router.get('/praia-do-rosa', function(req, res, next) {
    res.render('praia-do-rosa');
  });
module.exports = router;
