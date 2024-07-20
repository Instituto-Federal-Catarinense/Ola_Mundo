var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Importa os módulos de rota
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var esportesRouter = require('./routes/esportes');
var musicaRouter = require('./routes/musica');

var app = express();

// Configuração do motor de visualização
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Alterado para EJS

// Configurações de middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Define as rotas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/esportes', esportesRouter);
app.use('/musica', musicaRouter);

// Captura 404 e encaminha para o manipulador de erros
app.use(function(req, res, next) {
  next(createError(404));
});

// Manipulador de erros
app.use(function(err, req, res, next) {
  // Define variáveis locais, fornecendo erro apenas em desenvolvimento
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderiza a página de erro usando o template EJS
  res.status(err.status || 500);
  res.render('error'); // Renderiza o template 'error.ejs'
});

module.exports = app;
