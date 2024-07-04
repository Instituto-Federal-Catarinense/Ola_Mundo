var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Vocẽ está na página de esportes');
});

module.exports = router;

/* GET users listing. */
router.get('/esportes', function(req, res, next) {
    res.send('Vocẽ está na página de esportes');
  });
  
  module.exports = router;

  /* GET users listing. */
router.get('/futebol', function(req, res, next) {
    res.send('Vocẽ está na página de futebol');
  });
  
  module.exports = router;

  /* GET users listing. */
router.get('/basquete', function(req, res, next) {
    res.send('Vocẽ está na página de basquete');
  });
  
  module.exports = router;

   /* GET users listing. */
router.get('/skate', function(req, res, next) {
    res.send('Vocẽ está na página de skate');
  });
  
  module.exports = router;