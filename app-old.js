const http = require('http')

//Para escuchar peticiones creamos el servidor
//Este recibe un callback
//Y este recibe los request (solicitudes) junto con las respuestas que nuestro server envia
//!CODIGO 1----------------------------------------------------
/* http
  .createServer((req, res) => {
    res.write('Hola mundo')
    res.end()
  })
  .listen(8080)

console.log('Escuchando en el puerto localhost:8080') */
//!FIN CODIGO 1-------------------------------------------------

//*CODIGO 2----------------------------------------------------
http
  .createServer((req, res) => {
    res.writeHead(200, { 'content-Type': 'application/json' })

    let salida = {
      nombre: 'Gustavo',
      edad: 31,
      url: req.url, //Me entrega la direccion de la peticion que estoy haciendo
    }
    res.write(JSON.stringify(salida))
    res.end()
  })
  .listen(8080)

console.log('Escuchando en el puerto localhost:8080')
//*FIN  CODIGO 2----------------------------------------------------
