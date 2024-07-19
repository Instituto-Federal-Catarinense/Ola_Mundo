var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('musica', {title:'suasdas', img:'imagens/piano.jpg'});
});

router.get('/violao', function(req, res, next) {
  res.send('Você está na página sobre violaon');
});

router.get('/piano', function(req, res, next) {
  res.send('Você está na página sobre pianinhes');
});

router.get('/tantan', function(req, res, next) {
  res.send('Você está na página sobre pats puts pasts pa puts pa pa puts');
});

router.get('/viola', function(req, res, next) {
  res.send('Você está na página sobre violers da maldade');
});

router.get('/violino', function(req, res, next) {
  res.send('Você está na página sobre vionelers');
});

module.exports = router;
