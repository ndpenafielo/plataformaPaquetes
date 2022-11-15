'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paqueteSchema = new Schema({

    noServicio: Number,
    fecha: {type: Date, default:Date.now},
    hora: String,
    estado: String,
    medidasLargo: Number,
    medidasAncho: Number,
    medidasAlto: Number,
    medidasPeso: Number,
    direcionRecog: String,
    ciudadRecog: String,
    nombreDest: String,
    docDest: String,
    direccionEntr: String,
    ciudadEntr: String
})

module.exports = mongoose.model('Paquete', paqueteSchema);



