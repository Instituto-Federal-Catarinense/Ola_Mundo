var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('rotaNOva', { title: 'Eu não me chamo Daniel' });
});

module.exports = router;