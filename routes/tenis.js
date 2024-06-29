var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('aba de tenis');
});

router.get('/surf', function (req, res, next) {
    res.send('aba de tenis de volei');
});

router.get('/futebol', function (req, res, next) {
    res.send('aba de tenis de futebol');
});


module.exports = router;
