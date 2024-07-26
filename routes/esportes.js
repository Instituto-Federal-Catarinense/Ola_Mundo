var express = require('express');
var router = express.Router();

/* GET lista de melhores esportes */
router.get('/', function(req, res, next) {
    res.render('esportes', { title: 'Lista de melhores esportes' });
});

router.get('/volei', function(req, res, next) {
    res.send('volei');
});

router.get('/volei-de-areia', function(req, res, next) {
    res.send('volei de areia');
});

router.get('/basquete', function(req, res, next) {
    res.send('basquete');
});

router.get('/futebol', function(req, res, next) {
    res.send('futebol');
});

module.exports = router;
