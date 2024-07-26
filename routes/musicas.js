var express = require('express');
var router = express.Router();

/* GET página principal de esportes. */
router.get('/', function (req, res, next) {
    res.render('musicas', { title: 'Musicas' });
});

/* GET páginas específicas de cada esporte. */
router.get('/rock', function (req, res, next) {
    res.render('rock', { title: 'rock' });
});

router.get('/funk', function (req, res, next) {
    res.render('funk', { title: 'funk' });
});

router.get('/pop', function (req, res, next) {
    res.render('pop', { title: 'pop' });
}); 

router.get('/romantica', function (req, res, next) {
    res.render('romantica', { title: 'romantica' });
});


module.exports = router;
