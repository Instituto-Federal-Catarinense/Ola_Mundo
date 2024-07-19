var express = require('express');
var router = express.Router();

const musicas = [
  { titulo: "Bohemian Rhapsody", artista: "Queen", genero: "Rock", ano: 1975 },
  { titulo: "Billie Jean", artista: "Michael Jackson", genero: "Pop", ano: 1982 },
  { titulo: "Stairway to Heaven", artista: "Led Zeppelin", genero: "Rock", ano: 1971 }
];

router.get('/', function(req, res, next) {
  res.render('musicas', { musicas });
});

router.get('/biblioteca', function(req, res, next) {
  res.send('Todas as músicas aqui');
});

router.get('/pesquisa', function(req, res, next) {
  var searchTerm = req.query.search;
  if (!searchTerm) {
    res.redirect('/');
    return;
  }

  var resultados = musicas.filter(musica =>
    musica.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (resultados.length === 0) {
    res.send('Nenhuma música encontrada para o termo de pesquisa: ' + searchTerm);
  } else {
    var responseText = `Resultados para "${searchTerm}":\n\n`;
    resultados.forEach(musica => {
      responseText += `Título: ${musica.titulo}\nArtista: ${musica.artista}\nGênero: ${musica.genero}\nAno: ${musica.ano}\n\n`;
    });
    res.send(responseText);
  }
});

router.get('/:id', function(req, res, next) {
  res.send('Música com id:' + req.params.id);
});

module.exports = router;
