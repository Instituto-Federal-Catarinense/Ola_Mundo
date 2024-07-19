var express = require('express');
var router = express.Router();

/* GET página principal de esportes. */
router.get('/', function (req, res, next) {
    res.render('Musicas', { title: 'Musicas' });
});

/* GET páginas específicas de cada esporte. */
router.get('/funk', function (req, res, next) {
    res.render('funk', { title: 'funk' });
});

router.get('/pagode', function (req, res, next) {
    res.render('pagode', { title: 'pagode' });
});

router.get('/trapp', function (req, res, next) {
    res.render('trapp', { title: 'trapp' });
}); 

router.get('/romantica', function (req, res, next) {
    res.render('romantica', { title: 'romantica' });
});

router.get('/poesia', function (req, res, next) {
    res.render('poesia', { title: 'poesia' });
});

router.get('/pop', function (req, res, next) {
    res.render('pop', { title: 'pop' });
});

module.exports = router;
