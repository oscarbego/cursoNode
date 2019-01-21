var express = require('express');
var app = express();


app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});




var wiki = require('./wiki.js');

/*
	--- Ejemplos de invocación desde el navegador Web ---
	http://localhost:3000/wiki/
	http://localhost:3000/wiki/about
*/

app.use('/wiki', wiki);

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});