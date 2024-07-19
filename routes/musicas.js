var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('esportes', { title: 'esporte' });
});

/* GET users listing. */
router.get('/guitarra-classica', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/cavaquinho', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/contrabaixo-eletrico', function(req, res, next) {
    res.send('respond with a resource');
  });

/* GET users listing. */
router.get('/cuica', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/tamborim', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/surdo', function(req, res, next) {
    res.send('respond with a resource');
  });

module.exports = router;
