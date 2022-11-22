import React from "react";
import {NavLink} from "react-router-dom"

const Paquete = ({id, paqueteData, delPaquete, updPaquete}) => {

  const { noServicio, fecha, estado, medidasLargo, medidasAncho, medidasAlto, medidasPeso, direcionRecog, ciudadRecog, nombreDest, docDest, direccionEntr, ciudadEntr } = paqueteData;
  const formatDate = (date) => {
    return date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4);
  }

  const formatHour = (date) => {
    return date.substring(11, 14) + date.substring(14, 16);
  }

  const del = () => {
    delPaquete(id);
  }

  const upd = () => {
    updPaquete(id, true);
  }

  return(
    <div className="col">
      <div className="card mx-auto mb-3 bg-light">
        <div className="card-header">
          <h3 className="card-title">Numero de servicio: {noServicio}</h3>
        </div>
        <div className="card-body">
          <label className="card-text text-start"><b>Estado:</b> {estado}</label>
          <ul className="list-group list-group-flush">
            <li className="list-pub list-group-item"><b>Fecha: </b> {formatDate(fecha)} <b>Hora:</b> {formatHour(fecha)}</li>
            <li className="list-pub list-group-item"><b>Medidas</b></li>
            <li className="list-pub list-group-item"> <b>Largo: </b> {medidasLargo} - <b> Ancho: </b>{medidasAncho} - <b>Alto:</b> {medidasAlto} - <b> Peso:</b> {medidasPeso}</li>
            <li className="list-pub list-group-item"> <b> Direción Recogida:</b> {direcionRecog}</li>
            <li className="list-pub list-group-item"><b>Ciudad Recogida:</b> {ciudadRecog}</li>
            <li className="list-pub list-group-item"><b>Nombre Destinatario: </b>{nombreDest}</li>
            <li className="list-pub list-group-item"><b>Documento Destinatario:</b> {docDest}</li>
            <li className="list-pub list-group-item"><b>Dirección Entrega:</b> {direccionEntr}</li>
            <li className="list-pub list-group-item"><b>Ciudad Entrega: </b>{ciudadEntr}</li>
          </ul>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger btn-sm" type="button" onClick={del}>Eliminar</button>
          <button className="btn btn-warning btn-sm" type="button" onClick={upd}>Modificar</button>
        </div>
      </div>


    </div>

  )
}

export default Paquete;
