var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'jodio' });
});
router.get('/volei', function(req, res, next) {
  res.render('index', { title: 'jodio' });
})
router.get('/basket', function(req, res, next) {
  res.render('index', { title: 'jodio' });
})
module.exports = router;
