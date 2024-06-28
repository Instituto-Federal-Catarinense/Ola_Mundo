var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('esportes');
});

router.get('/', function(req, res, next) {
    res.send('esportes');
});
router.get('/futebol', function(req, res, next) {
    res.send('futebol');
});
router.get('/boxe', function(req, res, next) {
    res.send('boxe');
});
router.get('/surfe', function(req, res, next) {
    res.send('surfe');
});

module.exports = router;
