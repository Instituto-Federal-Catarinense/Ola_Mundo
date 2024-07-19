var express = require('express');
var router = express.Router();

/* GET estilosmusicais page. */
router.get('/', function(req, res, next) {
  res.render('estilosmusicais');
});

router.get('/rock', function(req, res, next) {
  res.render('rock', { title: 'Rock' });
});

router.get('/pop', function(req, res, next) {
  res.render('pop', { title: 'Pop' });
});

router.get('/eletronica', function(req, res, next) {
  res.render('eletronica', { title: 'Eletrônica' });
});

router.get('/hip-hop', function(req, res, next) {
  res.render('hip-hop', { title: 'Hip-Hop' });
});

router.get('/jazz', function(req, res, next) {
  res.render('jazz', { title: 'Jazz' });
});

module.exports = router;
