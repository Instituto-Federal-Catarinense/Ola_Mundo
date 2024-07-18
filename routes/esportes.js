var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('esportes');
});

router.get('/volei', function (req, res, next) {
    res.render('esportes');
});

router.get('/futvolei', function (req, res, next) {
    res.render('esportes');
});

router.get('/basquete', function (req, res, next) {
    res.render('esportes');
});

router.get('/futebol', function (req, res, next) {
    res.render('esportes');
});

module.exports = router;

