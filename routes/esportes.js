var express = require('express');
var router = express.Router();

/* GET página principal de esportes. */
router.get('/', function (req, res, next) {
    res.render('esportes');
});

module.exports = router;
