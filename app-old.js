const http = require('http');

http.createServer((request, resp) => {

        resp.writeHead(200, { 'Content-Type': 'application/json' });
        // resp.write('Hola Mundo');
        let saluida = {
            nombre: 'erick',
            edad: 32,
            url: request.url
        }
        resp.write(JSON.stringify(saluida));
        resp.end();
    })
    .listen(8080);

console.log('Escuchando puerto 8080');