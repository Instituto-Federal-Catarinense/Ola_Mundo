var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("esportes");
});

router.get('/futebol', function(req, res, next) {
    res.send("fernando esportes");
  });

  router.get('/boxe', function(req, res, next) {
    res.send("fernando esportes");
  });

  router.get('/surfe', function(req, res, next) {
    res.send("fernando esportes");
  });

module.exports = router;
