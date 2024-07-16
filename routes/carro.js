const express = require('express');
const router = express.Router();

// Exemplo de dados sobre carros
const carros = [
  { id: 1, modelo: 'Fusca', imagem: 'URL_FUSCA' },
  { id: 2, modelo: 'Civic', imagem: 'URL_CIVIC' }
];

// Rota para a página do carro
router.get('/', (req, res) => {
  res.render('carro', {
    title: 'Informações sobre Carros',
    imageUrl: 'URL_DA_IMAGEM' // Substitua pela URL da imagem real
  });
});

// Rota para listar todos os carros
router.get('/lista', (req, res) => {
  res.render('listaCarros', { carros });
});

module.exports = router;
