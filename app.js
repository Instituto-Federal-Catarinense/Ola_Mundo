const express = require('express');
const path = require('path');

const app = express();

// Configuração para o uso de Pug como template engine
app.set('views', path.join(__dirname, 'views')); // Define o diretório onde os arquivos de template estão localizados
app.set('view engine', 'pug'); // Define o template engine como Pug

// Middleware para servir arquivos estáticos (opcional)
app.use(express.static(path.join(__dirname, 'public')));

// Exemplo de rota para renderizar uma página
app.get('/', function(req, res) {
  res.render('index', { title: 'Página Inicial', message: 'Bem-vindo ao meu site!' });
});

// Exemplo de rota para renderizar outra página
app.get('/sobre', function(req, res) {
  res.render('sobre', { title: 'Sobre', message: 'Conheça mais sobre nossa empresa.' });
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
