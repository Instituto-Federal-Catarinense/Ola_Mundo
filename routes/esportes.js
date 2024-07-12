var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('esportes');
});

router.get('/espovolei', function (req, res, next) {
    res.render('esportes/volei');
});

router.get('/futvolei', function (req, res, next) {
    res.render('futvolei');
});

router.get('/basquete', function (req, res, next) {
    res.render('basquete');
});

router.get('/futebol', function (req, res, next) {
    res.render('futebol');
});

module.exports = router;
module.exports = router;
