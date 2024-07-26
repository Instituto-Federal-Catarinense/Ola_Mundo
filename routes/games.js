var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('games', { title: 'Jogos' });
});

router.get('/roblox', function (req, res, next) {
    res.render('roblox', { title: 'Roblox' });
  });
  
  router.get('/rl', function (req, res, next) {
    res.render('rl', { title: 'Rocket League' });
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