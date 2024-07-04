var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/esportes', function(req, res, next) {
  res.render('index', { title: 'Pagina de esportes' });
});
/* GET home page. */
router.get('/volei', function(req, res, next) {
  res.render('index', { title: 'Volei' });
});

/* GET home page. */
router.get('/futebol', function(req, res, next) {
  res.render('index', { title: 'Futebol' });
});

/* GET home page. */
router.get('/basquete', function(req, res, next) {
  res.render('index', { title: 'Basquete' });
});

/* GET home page. */
router.get('/golfe', function(req, res, next) {
  res.render('index', { title: 'Golfe' });
});


module.exports = router;
