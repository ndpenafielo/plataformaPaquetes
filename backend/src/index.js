'use strict'

const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require ('bcrypt');


const PORT = 3900;

const user = 'nicolas';
const password = 'nico1234';
const dataB = 'appPaquetes'
var url = `mongodb+srv://${user}:${password}@plataformapaquetes.dhgltxx.mongodb.net/${dataB}`;

mongoose.Promise = global.Promise;

var routes = require('./routes/routes');

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

app.use('/api', routes);

mongoose.connect(url, {useNewUrlParser: true}).then(() => {
    console.log("Base de datos conectada")
    app.listen(PORT, () => {
    console.log('Ejecutando APP en puerto: ' + PORT)
    })
})
