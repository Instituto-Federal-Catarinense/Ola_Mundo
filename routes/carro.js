const express = require('express');
const router = express.Router();

/* GET carro listing. */
router.get('/', function(req, res, next) {
  res.render('carro', { 
    title: 'Em 1948, Ferdinand Porsche Júnior (filho de Ferdinand), e conhecido carinhosamente como Ferry, construiu a partir do Volkswagen um carro esportivo em Gmünd na Áustria, com o nome de Cisitalia. Nascia assim o primeiro carro esportivo do mundo, o 356, um roadster extremamente leve produzido em alumínio.',
    imageUrl: '/foto/porsche.jpg'
  });
});

router.get('/supra', function(req, res, next) {
  res.render('supra');
});

router.get('/bmw', function(req, res, next) {
  res.render('bmw', { 
    title: 'O BMW M3 Competition, combina as proporções robustas e distintas do seu design de três seções e 4 portas com o estilo esportivo típico de um veículo M. Com os seus impressionantes 510 cv de potência e um torque de 650 Nm.',
    imageUrl: '/foto/bmw2.jpeg'
  });
});

router.get('/fusca', function(req, res, next) {
  res.render('fusca', { 
    title: 'Dia Nacional do Fusca: relembre a história do clássico... O Volkswagen Fusca surgiu de uma encomenda de Adolf Hitler, que queria um carro popular para os alemães. O projeto foi feito por Ferdinand Porsche, e a produção marcou a criação da Volkswagen. A Segunda Guerra atrapalhou os planos e somente no final a década de 1940 que o modelo de fato engrenou.',
    imageUrl: '/foto/fusca.jpg'
  });
});

router.get('/ford', function(req, res, next) {
  res.render('ford', { 
    title: 'Os preços desse quarteto chegam a superar a marca de R$ 13 milhões, dependendo do exemplar - fazendo do GT também um dos automóveis mais caros do mercado brasileiro. Não é por acaso que a aparição de um desses carros chega a gerar comoção entre os entusiastas brasileiros.',
    imageUrl: '/foto/ford.jpg'
  });
});

router.get('/impala', function(req, res, next) {
  res.render('impala', { 
    title: 'Jensen Ackles revela ter ficado com o Impala da série ... O ator Jensen Ackles, que vive Dean Winchester na série "Supernatural", revelou que vai levar para casa o icônico Chevrolet Impala 1967 preto que ele dirigiu durante 15 temporadas da série.',
    imageUrl: '/foto/impala-67.jpg'
  });
});

module.exports = router;

