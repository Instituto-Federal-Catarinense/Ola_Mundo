var express = require('express');
var router = express.Router();

/* GET página principal de esportes. */
router.get('/', function (req, res, next) {
    res.render('maquiagem', { title: 'maquiagem' });
});
/* GET páginas específicas de cada esporte. */
router.get('/blush', function (req, res, next) {
    res.render('blush', { title: 'Blush' });
});
router.get('/rimel', function (req, res, next) {
    res.render('Rimel', { title: 'Rimel' });
});
router.get('/batom', function (req, res, next) {
    res.render('Batom', { title: 'Batom' });
});
router.get('/iluminador', function (req, res, next) {
    res.render('Iluminador', { title: 'Iluminador' });
});

module.exports = router;