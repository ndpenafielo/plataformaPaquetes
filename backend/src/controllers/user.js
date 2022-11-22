'use strict'

var User = require('../models/user');

//creamos un objeto para disponer de todos metodos de ruta

var controllerUser = {
    register: (req,res) => {
        const {name, email, username, password} = req.body;

        const user = new User({name, email, username, password});

        user.save( err => {
            if (err){
                res.status(500).send('Error al Registrar Usuario' + err.message)
            }else{
                res.status(200).send('Usuario Registrado Correctamente')
            }
        });

    },

    login: (req,res) => {
        const {username, password} = req.body;

        User.findOne({username}, (err, user) => {
            if(err){
                res.status(500).send('Error al Autenticar')
            }else if(!user){
                res.status(500).send('El usuario no existe')
            }else {
                user.isCorrectPassword(password, (err, result) => {
                    if(err){
                        res.status(500).send('Error al Autenticar')
                    }else if(result){
                        res.status(200).send('Usuario Autenticado')
                    }else {
                        res.status(500).send('Usuario y/o Contraseña Incorrecta')
                    }
                });
            }
        });


    }
}

module.exports = controllerUser;
