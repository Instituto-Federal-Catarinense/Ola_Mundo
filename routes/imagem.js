var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('ERA PRA TER UMA FOTO AQUI.');
});

module.exports = router;