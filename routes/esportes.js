var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Lista');
});

router.get('/volei', function (req, res, next) {
    res.send('volei');
});

router.get('/futvolei', function (req, res, next) {
    res.send('futebol');
});

router.get('/basquete', function (req, res, next) {
    res.send('basquete');
});

router.get('/futebol', function (req, res, next) {
    res.send('futebol');
});

module.exports = router;
module.exports = router;
