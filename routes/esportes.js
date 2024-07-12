var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

module.exports = router;

/* GET users listing. */
router.get('/esportes', function(req, res, next) {
    res.render('esportes');
  });
  
  module.exports = router;

  /* GET users listing. */
router.get('/futebol', function(req, res, next) {
    res.render('futebol');
  });
  
  module.exports = router;

  /* GET users listing. */
router.get('/basquete', function(req, res, next) {
    res.render('basquete');
  });
  
  module.exports = router;

   /* GET users listing. */
router.get('/skate', function(req, res, next) {
    res.render('skate');
  });
  
  module.exports = router;

   /* GET users listing. */
router.get('/poloaquatico', function(req, res, next) {
    res.render('poloaquatico');
  });
  
  module.exports = router;