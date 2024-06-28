var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("<h1>Nossas frutas</h1><br><ul><li>Maça</li><li>Limão</li><ul>");
});

module.exports = router;
