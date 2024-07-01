var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('aba de livro');
});

router.get('/romance', function (req, res, next) {
    res.send('aba de romance');
});

router.get('/ficao', function (req, res, next) {
    res.send('aba de ficao');
});


module.exports = router;
