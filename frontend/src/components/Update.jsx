import React, {useState} from 'react';
import axios from "axios";
import {Navigate} from "react-router-dom"
import Global from "../Global";

const Update = ({paqueteData, updateBool}) =>{

  const url = Global.url;
  const { _id, noServicio, fecha, estado, medidasLargo, medidasAncho, medidasAlto, medidasPeso, direcionRecog, ciudadRecog, nombreDest, docDest, direccionEntr, ciudadEntr } = paqueteData;

  const [paquete, setPaquete] = useState({
    noServicio: noServicio,
    estado: estado,
    medidasLargo: medidasLargo,
    medidasAncho: medidasAncho,
    medidasAlto: medidasAlto,
    medidasPeso: medidasPeso,
    direcionRecog: direcionRecog,
    ciudadRecog: ciudadRecog,
    nombreDest: nombreDest,
    docDest: docDest,
    direccionEntr: direccionEntr,
    ciudadEntr: ciudadEntr
  });

  const [redirect, setRedirect] = useState(false);

  let noSerRef = React.createRef();
  let estadoRef = React.createRef();
  let largoRef = React.createRef();
  let altoRef = React.createRef();
  let anchoRef = React.createRef();
  let pesoRef = React.createRef();
  let dirRecRef = React.createRef();
  let ciuRecRef = React.createRef();
  let nomDesRef = React.createRef();
  let docRef = React.createRef();
  let dirEntRef = React.createRef();
  let ciuEntRef = React.createRef();

  const changeState = () => {
    setPaquete({
      noServicio: noSerRef.current.value,
      estado: estadoRef.current.value,
      medidasLargo: largoRef.current.value,
      medidasAncho: anchoRef.current.value,
      medidasAlto: altoRef.current.value,
      medidasPeso: pesoRef.current.value,
      direcionRecog: dirRecRef.current.value,
      ciudadRecog: ciuRecRef.current.value,
      nombreDest: nomDesRef.current.value,
      docDest: docRef.current.value,
      direccionEntr: dirEntRef.current.value,
      ciudadEntr: ciuEntRef.current.value
    });

    console.log(paquete)
  }

  const sendData = (e) => {
    //evitamos que al recibir datos se recarge la pantalla

    changeState();
    //petición http con POST
    axios.post(url + 'update/' + _id , paquete).then( res => {
      setRedirect(true);
      updateBool(false);
      console.log(res.data);
    })
  }


  if(redirect){
    return <Navigate to="/paquetes" />
  }


  return(
    <div className='Editar-paquete'>
      <div id="formulario" className='card mx-auto mb-3 mt-5' style={{width: "30em"}}>
        <div className='card-header text-dark'>
          <h4>Editar Órden</h4>
        </div>
        <div className='card-body'>
          <form onSubmit={sendData}>
            <div className='mb-3'>
              <label>Número de Servicio</label>
              <input type="text" className="form-control" id="no-servicio" name="no-servicio" ref={noSerRef} onChange={changeState}  value={paquete.noServicio} readonly="readonly"/>
            </div>

            <div className='mb-3'>
              <label for="exampleDataList" class="form-label">Estado</label>
              <input class="form-control" list="datalistOptions" id="estado" name="estado" ref={estadoRef} onChange={changeState} value={paquete.estado} required/>
                <datalist id="datalistOptions">
                  <option value="Guardado"/>
                  <option value="Cancelado"/>
                  <option value="Cumplido"/>
                </datalist>
            </div>

            <div className='mb-1'>
              <label>Dimensiones</label>
            </div>

            <div className='mb-3'>
              <label>Largo</label>
              <input type="text" className="" id="dimensiones" name="dimensiones"  style={{width: "4em"}} ref={largoRef} onChange={changeState} value={paquete.medidasLargo} required />
              <label>Alto</label>
              <input type="text" className="" id="dimensiones" name="dimensiones"  style={{width: "4em"}} ref={altoRef} onChange={changeState} value={paquete.medidasAlto} required />
              <label>Ancho</label>
              <input type="text" className="" id="dimensiones" name="dimensiones"  style={{width: "4em"}} ref={anchoRef} onChange={changeState} value={paquete.medidasAncho} required />
              <label>Peso</label>
              <input type="text" className="" id="dimensiones" name="dimensiones"  style={{width: "4em"}} ref={pesoRef} onChange={changeState} value={paquete.medidasPeso} required />
            </div>

            <div className='mb-3'>
              <label>Dirección Recogida</label>
              <input type="text" className="form-control" id="dirección-recogida" name="dirección-recogida" ref={dirRecRef} onChange={changeState} value={paquete.direcionRecog} required />
            </div>

            <div className='mb-3'>
              <label>Ciudad Recogida</label>
              <input type="text" className="form-control" id="ciudad-recogida" name="ciudad-recogida" ref={ciuRecRef} onChange={changeState} value={paquete.ciudadRecog} required />
            </div>

            <div className='mb-3'>
              <label>Nombre Destinatario</label>
              <input type="text" className="form-control" id="nombre-destinatario" name="nombre-destinatario" ref={nomDesRef} onChange={changeState} value={paquete.nombreDest} required />
            </div>

            <div className='mb-3'>
              <label>Cedula/NIT Destinatario</label>
              <input type="text" className="form-control" id="documento" name="documento" ref={docRef} onChange={changeState} value={paquete.docDest} required />
            </div>

            <div className='mb-3'>
              <label>Dirección Entrega</label>
              <input type="text" className="form-control" id="dirección-entrega" name="dirección-entrega" ref={dirEntRef} onChange={changeState} value={paquete.direccionEntr} required />
            </div>

            <div className='mb-3'>
              <label>Ciudad Entrega</label>
              <input type="text" className="form-control" id="ciudad-entrega" name="ciudad-entrega" ref={ciuEntRef} onChange={changeState} value={paquete.ciudadEntr} required />
            </div>

            <div className='mb-3'>
              <input className="btn btn-warning" type="submit" id="create" value="Modificar Orden" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update
