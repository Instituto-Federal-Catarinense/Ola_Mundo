var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('games', { title: 'jogos' });
});

router.get('/cod', function (req, res, next) {
    res.render('cod', { title: 'Call of Duty' });
  });
  
  router.get('/gow', function (req, res, next) {
    res.render('gow', { title: 'God of War' });
  });
  
  router.get('/vava', function (req, res, next) {
    res.render('vava', { title: 'Valorant' });
  });
  
  router.get('/mine', function (req, res, next) {
    res.render('mine', { title: 'Minecraft' });
  });

  router.get('/nfs', function (req, res, next) {
    res.render('nfs', { title: 'Need For Speed' });
  });

module.exports = router;
