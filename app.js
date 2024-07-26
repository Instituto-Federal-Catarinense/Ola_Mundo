var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mustacheExpress = require('mustache-express')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var EsporteRouter = require('./routes/esportes');
var PokemonRouter = require('./routes/pokemon'); // Renomeei para PokemonRouter para ser mais claro

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache'); // Aqui você define o mecanismo de template para mustache

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/esportes', EsporteRouter);
app.use('/pokemon', PokemonRouter); // Use PokemonRouter para a rota /pokemon

// Middleware para lidar com erro 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Middleware de tratamento de erro
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
