require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.connectionString)
    .then(() => {
        app.emit('pronto')
    })
    .catch(err => {
        console.error('Erro ao conectar ao MongoDB:', err);
    });
const routes = require('./routes')
const path = require('path')
const {middlewareGlobal, outroMiddleware} = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended: true}))

app.set('views', path.resolve(__dirname, 'src', 'views'))
// app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use(express.static(path.resolve(__dirname, 'public')))

//Nossos proprios middlewares
app.use(middlewareGlobal)
app.use(outroMiddleware)
app.use(routes)


app.on("pronto", ()=>{

    app.listen(3000, ()=>{
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    })
})