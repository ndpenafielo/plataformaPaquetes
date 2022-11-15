'use strict'

var Paquete = require('../models/paquete');

//creamos un objeto para disponer de todos metodos de ruta

var controller = {
    //Metodo para crear paquete
    save: (req,res) => {
        var params = req.body;

        var paquete = new Paquete()

        paquete.noServicio = params.noServicio;
        paquete.hora = params.hora;
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
        var query = Paquete.find({});

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


    //Metodo para eliminar un paquete
    update: (req,res) => {


        var paqueteId = req.params.id;
        var params = req.body;

        // var newnoServicio = req.params.noServicio;
        // var newfecha = req.params.fecha;
        // var newhora = req.params.hora;
        // var newestado = req.params.estado;
        // var newmedidasLargo = req.params.medidasLargo;
        // var newmedidasAncho = req.params.medidasAncho;
        // var newmedidasAlto = req.params.medidasAlto;
        // var newmedidasPeso = req.params.medidasPeso;
        // var newdirecionRecog = req.params.direcionRecog;
        // var newciudadRecog = req.params.ciudadRecog;
        // var newnombreDest = req.params.nombreDest;
        // var newdocDest = req.params.docDest;
        // var newdireccionEntr = req.params.direccionEntr;
        // var newciudadEntr = req.params.ciudadEntr;

        Paquete.findByIdAndUpdate({_id: paqueteId}, {

            // paquete.noServicio = params.noServicio;
            // paquete.hora = params.hora;
            // paquete.estado = params.estado;
            // paquete.medidasLargo = params.medidasLargo;
            // paquete.medidasAncho = params.medidasAncho;
            // paquete.medidasAlto = params.medidasAlto;
            // paquete.medidasPeso = params.medidasPeso;
            // paquete.direcionRecog = params.direcionRecog;
            // paquete.ciudadRecog = params.ciudadRecog;
            // paquete.nombreDest = params.nombreDest;
            // paquete.docDest = params.docDest;
            // paquete.direccionEntr = params.direccionEntr;
            // paquete.ciudadEntr = params.ciudadEntr;
            noServicio: params.noServicio,
            estado: params.estado,

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
                status: "success",
                paqueteUpdated
            });

        })
    }
}

module.exports = controller;
