var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('esportes');
});
router.get('/volei', function(req, res, next) {
    res.render('volei');
});

router.get('/futebol', function(req, res, next) {
    res.render('futebol');
});

router.get('/handball', function(req, res, next) {
    res.render('handball');
});

router.get('/basquete', function(req, res, next) {
    res.render('basquete');
});

module.exports = router;
