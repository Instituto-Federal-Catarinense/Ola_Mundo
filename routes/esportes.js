var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('aba de esportes');
});

router.get('/surf', function (req, res, next) {
    res.send('aba de esportes de surf');
});

router.get('/futebol', function (req, res, next) {
    res.send('aba de esportes de futebol');
});

router.get('/volei', function (req, res, next) {
    res.send('aba de esportes de volei');
});

router.get('/basquete', function (req, res, next) {
    res.send('aba de esportes de basquete');
});


module.exports = router;
