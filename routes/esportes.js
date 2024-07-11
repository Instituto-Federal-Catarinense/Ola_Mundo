var express = require('express');
var router = express.Router();

/* GET página principal de esportes. */
router.get('/', function (req, res, next) {
    res.render('esportes', { title: 'Esportes' });
});

/* GET páginas específicas de cada esporte. */
router.get('/volei', function (req, res, next) {
    res.render('volei', { title: 'Vôlei' });
});

router.get('/futebol', function (req, res, next) {
    res.render('futebol', { title: 'Futebol' });
});

router.get('/basquete', function (req, res, next) {
    res.render('basquete', { title: 'Basquete' });
});

router.get('/ping-pong', function (req, res, next) {
    res.render('ping-pong', { title: 'Ping-Pong' });
});

router.get('/golf', function (req, res, next) {
    res.render('golf', { title: 'Golf' });
});

router.get('/natacao', function (req, res, next) {
    res.render('natacao', { title: 'Natação' });
});

module.exports = router;
