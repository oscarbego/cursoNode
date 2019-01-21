// wiki.js - Modulo de rutas Wiki

var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
  res.send('Página de inicio Wiki');
});

// About page route
router.get('/about', function(req, res) {
  res.send('Acerca de esta wiki');
});

router.post('/about', function(req, res) {
  res.send('Acerca de esta wiki, con post');
});

router.all('/secret', function(req, res) {
  console.log('Accediendo a la seccion secreta ...');
  res.send('secret de esta wiki');
  //next(); // pasa el control al siguiente manejador
});


module.exports = router;