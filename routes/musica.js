var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('musica'); // Rota padrão para a página inicial, renderizando 'musica'
});

router.get('/pop', function(req, res, next) {
    res.render('pop'); // Rota para '/pop', renderizando 'pop' (gênero musical)
});

router.get('/rock', function(req, res, next) {
    res.render('rock'); // Rota para '/rock', renderizando 'rock' (gênero musical)
});

router.get('/eletronica', function(req, res, next) {
    res.render('eletronica'); // Rota para '/eletronica', renderizando 'eletronica' (gênero musical)
});

router.get('/hiphop', function(req, res, next) {
    res.render('hiphop'); // Rota para '/hiphop', renderizando 'hiphop' (gênero musical)
});

router.get('/jazz', function(req, res, next) {
    res.render('jazz'); // Rota para '/jazz', renderizando 'jazz' (gênero musical)
});

module.exports = router;
