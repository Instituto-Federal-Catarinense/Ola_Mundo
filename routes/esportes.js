var express = require('express');
var router = express.Router();

/* GET lista de melhores esportes */
router.get('/', function(req, res, next) {
    res.render('esportes', { title: 'Lista de melhores esportes' });
});

router.get('/Volei', function(req, res, next) {
    res.send('Primeiro: volei');
});

router.get('/Volei de areia', function(req, res, next) {
    res.send('Segundo: volei de areia');
});

router.get('/Basquete', function(req, res, next) {
    res.send('Terceiro: basquete');
});

router.get('/Futebol', function(req, res, next) {
    res.send('Quarto: futebol');
});

module.exports = router;
