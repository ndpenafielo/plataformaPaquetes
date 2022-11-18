import React from "react";

const Paquete = ({id, paqueteData, delPaquete}) => {

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

  const mod = () => {

  }

  return(
    <div className="col">
      <div className="card mx-auto mb-3 bg-light">
        <div className="card-header">
          <h3 className="card-title">Numero de servicio: {noServicio}</h3>
        </div>
        <div className="card-body">
          <label className="card-text text-start">Estado: {estado}</label>
          <ul className="list-group list-group-flush">
            <li className="list-pub list-group-item">Fecha: {formatDate(fecha)} Hora: {formatHour(fecha)}</li>
            <li className="list-pub list-group-item">medidas:</li>
            <li className="list-pub list-group-item">Largo: {medidasLargo} - Ancho: {medidasAncho} - Alto: {medidasAlto} - Peso: {medidasPeso}</li>
            <li className="list-pub list-group-item">Direción Recogida: {direcionRecog}</li>
            <li className="list-pub list-group-item">Ciudad Recogida: {ciudadRecog}</li>
            <li className="list-pub list-group-item">Nombre Destinatario: {nombreDest}</li>
            <li className="list-pub list-group-item">Documento Destinatario: {docDest}</li>
            <li className="list-pub list-group-item">Dirección Entrega: {direccionEntr}</li>
            <li className="list-pub list-group-item">Ciudad Entrega: {ciudadEntr}</li>
          </ul>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger btn-sm" type="button" onClick={del}>Eliminar</button>
          <button className="btn btn-warning btn-sm" type="button" onClick={mod}>Modificar</button>
        </div>
      </div>


    </div>

  )
}

export default Paquete;
