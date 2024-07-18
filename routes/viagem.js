var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('viagem');
});

router.get('/italia', function (req, res, next) {
    res.render('viagem');
});

router.get('/franca', function (req, res, next) {
    res.render('viagem');
});

router.get('/alemanha', function (req, res, next) {
    res.render('viagem');
});



module.exports = router;

