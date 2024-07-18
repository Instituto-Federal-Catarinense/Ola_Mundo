var express = require('express');
var router = express.Router();

/* GET página inicial de carros. */
router.get('/', function(req, res, next) {
  res.render('pista', {
    title: 'Página de Pista',
    imageUrl: '/fotos/ayrtonsenna.jpg'  // caminho relativo ao diretório 'public'
  });
});

/* GET página de Formula 1. */
router.get('/formula1', function(req, res, next) {
  res.render('pista', {
    title: 'Formula 1',
    imageUrl: '/fotos/fernandoalonso.webp'  // caminho relativo ao diretório 'public'
  });
});

router.get('/formulaum', function(req, res, next) {
    res.render('Pista', {
      title: 'Formula 1',
      imageUrl: '/fotos/lewishamilton.webp'  // caminho relativo ao diretório 'public'
    });
  });

module.exports = router;