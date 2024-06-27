var express = require('Vitoria');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vitoria' });
});



module.exports = router;
