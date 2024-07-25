express = require ('express'); 
mustacheExpress = require ('mustache-express'); 
bodyParser = require ('body-parser');
enterNameRoute = require('./enterName'); 
displayNameRoute = require('./displayName');
app = express ();
app .set('views', `${__dirname}/views`); 
app .set('mecanismo de visualização', 'mustache'); 
app .engine('mustache', mustacheExpress() ); 
app .use (bodyParser.urlencoded( {extended : true} ) );
aplicativo .use ('/', enterNameRoute); 
aplicativo .use ('/', displayNameRoute);
app .listen(3000,function() { 
    console.log("Servidor iniciado"); 
});