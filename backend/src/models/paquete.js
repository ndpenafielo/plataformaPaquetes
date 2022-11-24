'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paqueteSchema = new Schema({

    fecha: {type: Date, default:Date.now},
    estado: {type: String, required: true},
    medidasLargo: Number,
    medidasAncho: Number,
    medidasAlto: Number,
    medidasPeso: Number,
    direcionRecog: {type: String, required: true},
    ciudadRecog: {type: String, required: true},
    nombreDest: {type: String, required: true},
    docDest: {type: String, required: true},
    direccionEntr: {type: String, required: true},
    ciudadEntr: {type: String, required: true},
    usuario: {type: String, required: true}
})

module.exports = mongoose.model('Paquete', paqueteSchema);



