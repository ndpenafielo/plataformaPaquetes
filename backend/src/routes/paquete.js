'use strict'

var express = require('express')
var Paquete = require('../controllers/paquete')

//llamamos al objeto router de express
var router = express.Router();

router.post('/save', Paquete.save);

router.get('/paquetes', Paquete.getPaquetes);

router.delete('/delete/:id', Paquete.delete);

//router.put('/update/:id-:noServicio-:fecha-:hora-:estado-:medidasLargo-:medidasAncho-:medidasAlto-:medidasPeso-:direcionRecog-:ciudadRecog-:nombreDest-:docDest-:direccionEntr-:ciudadEntr'),Paquete.update;
router.put('/update/:id'),Paquete.update;

module.exports = router;
