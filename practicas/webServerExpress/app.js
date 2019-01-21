
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Hola Mundo, Express!');
});

app.get('/saludo', function (req, res) {
 
	var nombre = req.query.nombre || ' :) ';
	res.send('Hola Mundo, ' + nombre);	
 
});

app.get('/saludo-html', function (req, res) {
 
	var nombre = req.query.nombre || ' :) ';
	var html = '<html><body>'
		      + '<h1>Saludos</h1>'
		      + '<p>' + nombre + '</p>'
		      + '</body></html>';

	res.send(html);	
 
});


app.get('/saludo-html-form', function (req, res) {
 
	var nombre = req.query.nombre || ' :) ';
	var html = '<html><body>'
		      + '<h1>Saludo</h1>'
		      + '<p>' + nombre + '</p>'
		      + '<form method="get" action="/saludo-html-form">'
		      + '<label for="nombre">¿Cómo te llamas?</label>'
		      + '<input type="text" name="nombre" id="nombre">'	
		      + '<input type="submit" value="Enviar"/>'
		      + '</form>'
		      + '</body></html>';

	res.send(html);	
 
});




app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});