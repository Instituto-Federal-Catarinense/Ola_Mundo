
const express = require('express');
const router = express.Router();

/* GET carro listing. */
router.get('/', function(req, res, next) {
  res.render('carro', { 
    title: 'Página de Carros',
    imageUrl: './foto/images (1).jpeg' // Caminho para a imagem
  });
});

module.exports = router;