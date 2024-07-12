const express = require('express');
const router = express.Router();

/* GET carro listing. */
router.get('/', function(req, res, next) {
  res.render('carro', { 
    title: 'Página de Carros',
    imageUrl: '/foto/porsche.jpg'
  });
});

router.get('/supra', function(req, res, next) {
  res.render('carro', { 
    title: 'O nome "Supra" é derivado do prefixo latino, que significa "acima", "ultrapassar" ou "ir além". O Supra possui linhas agressivas e um aerofólio para gerar sustentação negativa e dar mais esportividade ao design do carro.',
    imageUrl: '/foto/supra.jpeg'
  });
});

router.get('/bmw', function(req, res, next) {
  res.render('carro', { 
    title: 'O BMW M3 Competition, combina as proporções robustas e distintas do seu design de três seções e 4 portas com o estilo esportivo típico de um veículo M. Com os seus impressionantes 510 cv de potência e um torque de 650 Nm.',
    imageUrl: '/foto/bmw.jpg'
  });
});

module.exports = router;
