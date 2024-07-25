var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/esportes', function(req, res, next) {
  res.render('esportes', { title: 'Esportes' });
});

router.get('/musicas', function(req, res, next) {
  res.render('musicas', { title: 'Musicas' });
});

module.exports = router;
