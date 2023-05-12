const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const puerto = 8081

//Servidor de contenido estatico
app.use(express.static('public'))

//Configuracion de las vistas hbs
app.set('views',path.join(__dirname+'/public/views'))
app.set('view engine','hbs')

//Configuracion del directorio que guardara los archivos partials hbs
hbs.registerPartials(__dirname+'/public/views/partials');

app.get('/', (req,res) => {
    res.render('home',
    {
        titulo: 'Home',
        nombre: 'Cristian Estrada'
    })
})

app.get('/productos', (req,res) => {
    res.render('productos',
    {
        titulo: 'Listado Productos',
        nombre: 'Cristian Estrada',
        rol: 'Admin'
    })
})

app.listen(puerto, () => {
    console.log(`Escuchando por el puerto ${puerto}`)
})