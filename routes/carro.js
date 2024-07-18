var express = require('express');
var router = express.Router();

/* GET página inicial de carros. */
router.get('/', function(req, res, next) {
  res.render('carro', {
    title: 'Página de Carros',
    imageUrl: '/fotos/ayrtonsenna.jpg'  // caminho relativo ao diretório 'public'
  });
});

/* GET página de Formula 1. */
router.get('/formula1', function(req, res, next) {
  res.render('carro', {
    title: 'Formula 1',
    imageUrl: '/fotos/fernandoalonso.webp'  // caminho relativo ao diretório 'public'
  });
});

/* GET página de Nissan GT-R. */
router.get('/nissangtr', function(req, res, next) {
  res.render('carro', {
    title: 'Nissan GT-R',
    imageUrl: '/fotos/lewishamilton.webp'  // caminho relativo ao diretório 'public'
  });
});

/* GET página de Toyota AE-86. */
router.get('/toyotaae', function(req, res, next) {
  res.render('carro', {
    title: 'Toyota Corolla Trueno AE-86',
    imageUrl: '/fotos/motogp.jpg'  // Exemplo de imagem para a página de Moto
  });
});

/* GET página de Mazda RX-7 FC. */
router.get('/mazdarx', function(req, res, next) {
  res.render('carro', {
    title: 'Mazda RX-7 FC',
    imageUrl: '/fotos/pista.jpg'  // Exemplo de imagem para a página de Pista
  });
});

/* GET página de Ford Mustang 68. */
router.get('/fordmus', function(req, res, next) {
  res.render('carro', {
    title: 'Ford Mustang 68',
    imageUrl: '/fotos/pista.jpg'  // Exemplo de imagem para a página de Pista
  });
});

module.exports = router;
