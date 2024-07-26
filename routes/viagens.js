var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('viagens');
});

router.get('/italia', function (req, res, next) {
    res.render('viagens');
});

router.get('/franca', function (req, res, next) {
    res.render('viagens');
});

router.get('/alemanha', function (req, res, next) {
    res.render('viagens');
});



module.exports = router;

