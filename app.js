var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sportsRouter = require('./routes/esportes');
var gamesRouter = require('./routes/videogames');

var app = express();

// Configuração do motor de visualização
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Definindo rotas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/esportes', sportsRouter);
app.use('/videogames', gamesRouter);

// Tratamento de erro 404 e encaminhamento para o manipulador de erros
app.use(function(req, res, next) {
  next(createError(404));
});

// Manipulador de erros
app.use(function(err, req, res, next) {
  // Configuração local, fornecendo erro apenas em desenvolvimento
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderizar a página de erro
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
