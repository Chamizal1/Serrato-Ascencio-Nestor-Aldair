//vamoa crear el server :)

var http = require('http');

//todo server debe de poder atender peticiones y debe de generar respuestas por tanto se debe de tener dos parametros

var servidor = http.createServer(function(request, Response){
    Response.writeHead(200,{'Content-Type': 'text/html charset=utf-8'});
})
Response.write('<h2>Hola este es un servidor pero chiquito</h2>')