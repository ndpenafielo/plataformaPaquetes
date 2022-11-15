import React, {useState} from 'react';
import axios from "axios";
import {Navigate} from "react-router-dom"
import Global from "../Global";

const New = () =>{

  const url = Global.url;

  const [paquete, setPaquete] = useState({
    noServicio: null,
    hora: null,
    estado: null,
    medidasLargo: null,
    medidasAncho: null,
    medidasAlto: null,
    medidasPeso: null,
    direcionRecog: null,
    ciudadRecog: null,
    nombreDest: null,
    docDest: null,
    direccionEntr: null,
    ciudadEntr: null
  });

  return(
    <div className='nuevo-paquete'>
      <div id="formulario" className='card mx-auto mb-3 mt-5' style={{width: "30em"}}>
        <div className='card-header text-dark'>
          <h4>Crear Órden</h4>
        </div>
        <div className='card-body'>
          <form>

            <div className='mb-3'>
              <label>Número de Servicio</label>
              <input type="text" clasname="form-control" id="no-servicio" name="no-servicio" style={{width: "8em"}} required/>
            </div>

            <div className='mb-1'>
              <label>Dimensiones</label>
            </div>

            <div className='mb-3'>
              <label>Largo</label>
              <input type="text" clasname="form-control" id="dimensiones" name="dimensiones"  style={{width: "4em"}} required />
              <label>Alto</label>
              <input type="text" clasname="form-control" id="dimensiones" name="dimensiones"  style={{width: "4em"}} required />
              <label>Ancho</label>
              <input type="text" clasname="form-control" id="dimensiones" name="dimensiones"  style={{width: "4em"}} required />
              <label>Peso</label>
              <input type="text" clasname="form-control" id="dimensiones" name="dimensiones"  style={{width: "4em"}} required />
            </div>

            <div className='mb-3'>
              <label>Dirección Recogida</label>
              <input type="text" clasname="form-control" id="dirección-recogida" name="dirección-recogida" required />
            </div>

            <div className='mb-3'>
              <label>Ciudad Recogida</label>
              <input type="text" clasname="form-control" id="ciudad-recogida" name="ciudad-recogida" required />
            </div>

            <div className='mb-3'>
              <label>Nombre Destinatario</label>
              <input type="text" clasname="form-control" id="nombre-destinatario" name="nombre-destinatario" required />
            </div>

            <div className='mb-3'>
              <label>Cedula/NIT Destinatario</label>
              <input type="text" clasname="form-control" id="documento" name="documento" required />
            </div>

            <div className='mb-3'>
              <label>Dirección Entrega</label>
              <input type="text" clasname="form-control" id="dirección-entrega" name="dirección-entrega" required />
            </div>

            <div className='mb-3'>
              <label>Ciudad Entrega</label>
              <input type="text" clasname="form-control" id="ciudad-entrega" name="ciudad-entrega" required />
            </div>

            <div className='mb-3'>
              <input clasname="btn btn-primary-" type="submit" id="create" value="Crear Orden" />
            </div>
          </form>

        </div>

      </div>

    </div>
  );
}

export default New
