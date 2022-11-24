'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paqueteSchema = new Schema({

    fecha: {type: Date, default:Date.now},
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
    ciudadEntr: String,
    usuario: String
})

module.exports = mongoose.model('Paquete', paqueteSchema);



