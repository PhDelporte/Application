// Imports
var express = require('express');

// Instantiate server
var server = express();

// Configure routes 
server.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon servveur</h1>'); // 200 car c'est le code HTTP pour le succès de la requête
});

// Launch server
server.listen(8080, function() {
    console.log('Serveur en écoute : ');
});
