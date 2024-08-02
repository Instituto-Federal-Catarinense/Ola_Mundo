var express = require('express');
var router = express.Router();

/* GET musicas list page. */
router.get('/', function(req, res, next) {
  res.render('musicas', {
    title: 'Músicas Mais Conhecidas',
    musicas: [
      { name: 'Bohemian Rhapsody', artist: 'Queen', url: '/musicas/bohemian_rhapsody' },
      { name: 'Stairway to Heaven', artist: 'Led Zeppelin', url: '/musicas/stairway_to_heaven' },
      { name: 'Imagine', artist: 'John Lennon', url: '/musicas/imagine' },
      { name: 'Smells Like Teen Spirit', artist: 'Nirvana', url: '/musicas/smells_like_teen_spirit' },
      { name: 'Hotel California', artist: 'Eagles', url: '/musicas/hotel_california' }
    ]
  });
});

/* GET individual music pages. */
router.get('/bohemian_rhapsody', function(req, res, next) {
  res.render('bohemian_rhapsody', { title: 'Bohemian Rhapsody', artist: 'Queen' });
});

router.get('/stairway_to_heaven', function(req, res, next) {
  res.render('stairway_to_heaven', { title: 'Stairway to Heaven', artist: 'Led Zeppelin' });
});

router.get('/imagine', function(req, res, next) {
  res.render('imagine', { title: 'Imagine', artist: 'John Lennon' });
});

router.get('/smells_like_teen_spirit', function(req, res, next) {
  res.render('smells_like_teen_spirit', { title: 'Smells Like Teen Spirit', artist: 'Nirvana' });
});

router.get('/hotel_california', function(req, res, next) {
  res.render('hotel_california', { title: 'Hotel California', artist: 'Eagles' });
});

module.exports = router;