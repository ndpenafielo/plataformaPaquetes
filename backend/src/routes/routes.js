'use strict'

var express = require('express')
var Paquete = require('../controllers/paquete')
var User = require('../controllers/user')

//llamamos al objeto router de express
var router = express.Router();

router.post('/save', Paquete.save);

router.get('/paquetes/:usuario', Paquete.getPaquetes);

router.delete('/delete/:id', Paquete.delete);

router.post('/update/:id', Paquete.update);

router.post('/register', User.register);

router.post('/login', User.login);

module.exports = router;
