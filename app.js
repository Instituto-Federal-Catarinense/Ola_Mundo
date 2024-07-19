var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mustacheExpress = require('mustache-express'); // Importar o mustache-express

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sportsRouter = require('./routes/esportes');
var gamesRouter = require('./routes/games');

var app = express();

// Configuração do mecanismo de visualização Mustache
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/esportes', sportsRouter);
app.use('/games', gamesRouter);

// Middleware para lidar com erro 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Middleware de tratamento de erro
app.use(function(err, req, res, next) {
  // Definir variáveis locais para a renderização de erro
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderizar a página de erro
  res.status(err.status || 500);
  res.render('error'); // Renderiza o template de erro (error.mustache)
});

module.exports = app;
