var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('esportes', { title: "Esportes" });
});

router.get('/futebol', function(req, res, next) {
  res.render('futebol', { title: "Futebol" });
});

router.get('/ufc', function(req, res, next) {
  res.render('ufc', { title: "UFC" });
});

router.get('/surfe', function(req, res, next) {
  res.render('surfe', { title: "Surfe" });
});

module.exports = router;