var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('musica');
});
router.get('/funk', function(req, res, next) {
    res.render('funk');
});

router.get('/sertanejo', function(req, res, next) {
    res.render('sertanejo');
});

router.get('/hiphop', function(req, res, next) {
    res.render('hiphop');
});

router.get('/pagode', function(req, res, next) {
    res.render('pagode');
});
router.get('/mpb', function(req, res, next) {
    res.render('mpb');
});


module.exports = router;
