var express = require('express');
var router = express.Router();

const livros = [
  { titulo: "Dom Quixote", autor: "Miguel de Cervantes", genero: "Ficção", ano: 1605 },
  { titulo: "Orgulho e Preconceito", autor: "Jane Austen", genero: "Romance", ano: 1813 },
  { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", genero: "Realismo Mágico", ano: 1967 }
];

router.get('/', function(req, res, next) {
  res.render('livros', { livros });
});

router.get('/biblioteca', function(req, res, next) {
  res.send('Todos livros aqui');
});

router.get('/pesquisa', function(req, res, next) {
  var searchTerm = req.query.search;
  if (!searchTerm) {
    res.redirect('/');
    return;
  }

  var resultados = livros.filter(livro =>
    livro.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (resultados.length === 0) {
    res.send('Nenhum livro encontrado para o termo de pesquisa: ' + searchTerm);
  } else {
    var responseText = `Resultados para "${searchTerm}":\n`;
    resultados.forEach(livro => {
      responseText += `\nTítulo: ${livro.titulo}\nAutor: ${livro.autor}\nGênero: ${livro.genero}\nAno: ${livro.ano}\n`;
    });
    res.send(responseText);
  }
});


router.get('/:id', function(req, res, next) {
  res.send('Livro com id:' + req.params.id);
});

module.exports = router;
