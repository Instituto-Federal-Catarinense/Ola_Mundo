var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mustacheExpress = require('mustache-express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var esportesRouter = require('./routes/esportes');
var musicasRouter = require('./routes/musicas'); // Adicionando o roteador de músicas

var app = express();

// view engine setup
app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/esportes', esportesRouter);
app.use('/musicas', musicasRouter); // Adicionando a nova rota de músicas

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { message: err.message, error: err });
});

module.exports = app;