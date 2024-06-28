var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Esportes' });
});
router.get('/futebol', function(req, res, next) {
    res.render('index', { title: 'Futebol' });
  });

  router.get('/surf', function(req, res, next) {
    res.render('index', { title: 'Surf' });
  });

  router.get('/volei', function(req, res, next) {
    res.render('index', { title: 'Volei' });
  });
  



module.exports = router;
