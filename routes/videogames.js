var express = require('express');
var router = express.Router();

/* GET página principal de videogames. */
router.get('/', function (req, res, next) {
    res.render('videogames', { title: 'Video Games' });
});

/* GET páginas específicas de cada videogame. */
router.get('/xbox', function (req, res, next) {
    res.render('xbox', { title: 'Xbox' });
});

router.get('/ps4', function (req, res, next) {
    res.render('ps4', { title: 'PS4' });
});

router.get('/xbox360', function (req, res, next) {
    res.render('xbox360', { title: 'Xbox 360' });
});

router.get('/ps5', function (req, res, next) {
    res.render('ps5', { title: 'PS5' });
});

module.exports = router;
