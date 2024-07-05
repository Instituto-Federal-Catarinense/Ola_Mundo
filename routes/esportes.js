var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('esportes');
});
router.get('/volei', function(req, res, next) {
    res.render('pagina de volei');
});

router.get('/futebol', function(req, res, next) {
    res.render('pagina de futebol');
});

router.get('/handball', function(req, res, next) {
    res.render('pagina de handball');
});

module.exports = router;
