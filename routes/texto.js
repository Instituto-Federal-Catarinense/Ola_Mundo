var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Desejo que você Não tenha medo da vida, tenha medo de não vivê-la Não há céu sem tempestades, nem caminhos sem acidentes. Só é digno do pódio quem usa as derrotas para alcançá-lo. Só é digno da sabedoria quem usa as lágrimas para irrigá-la. Os frágeis usam a força; os fortes, a inteligência. Seja um sonhador, mas una seus sonhos com disciplina, Pois sonhos sem disciplina produzem pessoas frustradas.Seja um debatedor de ideias. Lute pelo que você ama.');
});

module.exports = router;