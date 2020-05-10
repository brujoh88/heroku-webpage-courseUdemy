const express = require('express')
const app = express()
const hbs = require('hbs')

//Para traer los helpers
require('./hbs/helpers')

// acceso al puerto en heroku por medio de la variable de entorno global o bien tomar el puerto 3000

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Gustavo hErnan tIseira',
  })
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(port, () =>
  console.log(`Escuchando en el puerto http://localhost:${port}`)
)
