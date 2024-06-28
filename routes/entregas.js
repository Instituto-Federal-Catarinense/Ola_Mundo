var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("<h1>Entregas:</h1><br><ul><li>Sombrio</li><li>Balneario Gaivota</li><ul>");
});

module.exports = router;
