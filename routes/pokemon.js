var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pokemon');
});

router.get('/pikachu', function(req, res, next) {
    res.render('pikachu');
  });

  router.get('/snorlax', function(req, res, next) {
    res.render('snorlax');
  });

  router.get('/squirtle', function(req, res, next) {
    res.render('squirtle');
  });
  



module.exports = router;
