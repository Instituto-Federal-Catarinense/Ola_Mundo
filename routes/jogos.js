var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('jogos');
});

/* GET users listing. */
router.get('/minecraft', function(req, res, next) {
  res.render('minecraft');
});

/* GET users listing. */
router.get('/roblox', function(req, res, next) {
    res.render('roblox');
  });

  /* GET users listing. */
router.get('/sonic', function(req, res, next) {
    res.render('sonic');
  });

  /* GET users listing. */
router.get('/fortnite', function(req, res, next) {
    res.render('fortnite');
  });

   /* GET users listing. */
router.get('/pillarchase', function(req, res, next) {
    res.render('pillarchase');
  });

module.exports = router;
