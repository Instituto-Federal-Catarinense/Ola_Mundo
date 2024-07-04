var express = require('express');
var router = express.Router();

/* Carro. */
router.get('/', function(req, res, next) {
  res.send('Carro', {
    title: 'Página de Carros',
    imgUrl: './fotos/formula1/ayrtonsenna.jpg'
  });
});



module.exports = router;
