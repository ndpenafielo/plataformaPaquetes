'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const PORT = 3900;


const user = 'nicolas';
const password = 'nico1234';
const dataB = 'paquetes'
var url = `mongodb+srv://${user}:${password}@plataformapaquetes.dhgltxx.mongodb.net/${dataB}retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;

var paquete_routes = require('./routes/paquete');

//cargamos body-parser como middleware
app.use(bodyParser.urlencoded({extended: false}));

//cualquier petición es convertida en json
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTION, PUT, DELETE');
    next();
})

app.use('/api', paquete_routes);

mongoose.connect(url, {useNewUrlParser: true}).then(() => {
    console.log("Base de datos conectada")
    app.listen(PORT, () => {
    console.log('Ejecutando APP en puerto: ' + PORT)
    })
})
