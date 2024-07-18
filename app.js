var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carroRouter = require('./routes/carro');
var carroRouter = require('./routes/moto');
var carroRouter = require('./routes/pista');

var app = express();

// Configuração do motor de visualização
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rota para renderizar carro.ejs
app.get('/carro', (req, res) => {
  res.render('carro', { title: 'Informações sobre Carros' }); // Passa o título como variável para o template
});
app.get('/moto', (req, res) => {
  res.render('moto', { title: 'Informações sobre Motos' }); // Passa o título como variável para o template
});
app.get('/pista', (req, res) => {
  res.render('pista', { title: 'Informações sobre Pista' }); // Passa o título como variável para o template
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/carro', carroRouter);
app.use('/carro', motoRouter);
app.use('/carro', pistaRouter);

// Captura 404 e encaminha para o manipulador de erros
app.use(function(req, res, next) {
  next(createError(404));
});

// Manipulador de erros
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
