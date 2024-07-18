const express = require('express');
const app = express();

const esportesRouter = require('./routes/esportes');

const app = express();

// Configuração para o uso de Pug como template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota inicial
app.get('/', function(req, res) {
  res.render('index', { title: 'Página Inicial' });
});

// Rota para as páginas de esportes
app.use('/esportes', esportesRouter);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
