'use strict'

var Paquete = require('../models/paquete');

//creamos un objeto para disponer de todos metodos de ruta

var controllerPaquete = {
    //Metodo para crear paquete
    save: (req,res) => {
        var params = req.body;

        var paquete = new Paquete()

        paquete.estado = params.estado;
        paquete.medidasLargo = params.medidasLargo;
        paquete.medidasAncho = params.medidasAncho;
        paquete.medidasAlto = params.medidasAlto;
        paquete.medidasPeso = params.medidasPeso;
        paquete.direcionRecog = params.direcionRecog;
        paquete.ciudadRecog = params.ciudadRecog;
        paquete.nombreDest = params.nombreDest;
        paquete.docDest = params.docDest;
        paquete.direccionEntr = params.direccionEntr;
        paquete.ciudadEntr = params.ciudadEntr;
        paquete.usuario = params.usuario;

        paquete.save((err, paqueteStored) => {
            if (err || !paqueteStored){
                return res.status(404).send({
                    status: "error",
                    message: "El paquete no se ha guardado"
                })
            }
            return res.status(200).send({
                status: "success",
                paqueteStored
            });
        });

    },

    //Metodo para listar los paquetes

    getPaquetes: (req,res) => {
        var usuario = req.params.usuario;
        var query = Paquete.find({usuario});

        query.sort('-date').exec((err,paquetes) => {
            if (err) {
                return res.status(500).send ({
                    status: "error",
                    message: "Error al extraer los datos"
                });
            }

            if(!paquetes){
                return res.status(404).send({
                    status: "error",
                    message: "No hay articulos para mostrar"
                });
            }

            return res.status(200).send({
                status: "success",
                paquetes
            });
        })
    },

    //Metodo para eliminar un paquete
    delete: (req,res) => {
        var paqueteId = req.params.id;

        Paquete.findOneAndDelete({_id: paqueteId}, (err, paqueteRemoved) => {

            if(err){
                return res.status(500).send({
                    status: "error",
                    message: "Error al eliminar el Paquete"
                });
            }

            if(!paqueteRemoved){
                return res.status(404).send({
                    status: "error",
                    message: "No se ha encontrado el paquete"
                });
            }

            return res.status(200).send({
                status: "success",
                paquete: paqueteRemoved
            });

        })
    },


    //Metodo para actualizar un paquete
    update: (req,res) => {
        var paqueteId = req.params.id;

        Paquete.findByIdAndUpdate({_id: paqueteId}, {

            estado: req.body.estado,
            medidasLargo: req.body.medidasLargo,
            medidasAncho: req.body.medidasAncho,
            medidasAlto: req.body.medidasAlto,
            medidasPeso: req.body.medidasPeso,
            direcionRecog: req.body.direcionRecog,
            ciudadRecog: req.body.ciudadRecog,
            nombreDest: req.body.nombreDest,
            docDest: req.body.docDest,
            direccionEntr: req.body.direccionEntr,
            ciudadEntr: req.body.ciudadEntr

        },(err, paqueteUpdated) => {

            if(err){
                return res.status(500).send({
                    status: "error",
                    message: "Error al actualizar el Paquete"
                });
            }

            if(!paqueteUpdated){
                return res.status(404).send({
                    status: "error",
                    message: "No se ha encontrado el paquete"
                });
            }

            return res.status(200).send({
                status: "Success Updating",
                paqueteUpdated
            });

        })
    }
}

module.exports = controllerPaquete;
