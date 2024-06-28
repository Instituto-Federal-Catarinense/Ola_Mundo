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


module.exports = router;
