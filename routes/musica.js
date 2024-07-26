var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('musica', {title:'musica', img:'/imagens/musica.webp'});
});

router.get('/violao', function(req, res, next) {
  res.render('musica', {title:'violao', img:'/imagens/baden.jpeg'});
});

router.get('/piano', function(req, res, next) {
  res.render('musica', {title:'piano', img:'/imagens/piano.jpg'});
});

router.get('/tantan', function(req, res, next) {
  res.render('musica', {title:'tantan', img:'/imagens/gustavolima.jpeg'});
});

router.get('/viola', function(req, res, next) {
  res.render('musica', {title:'viola da maldade', img:'/imagens/viola.jpeg'});
});

router.get('/violino', function(req, res, next) {
  res.render('musica', {title:'violino inocente', img:'/imagens/paganini.jpg'});
});
module.exports = router;
