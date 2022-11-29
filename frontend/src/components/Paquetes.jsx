import React, {useState, useEffect} from "react";
import axios from "axios";
import Global from "../Global";
import Paquete from "./Paquete";
import Update from "./Update";
import useAuth from "./useAuth";


const Paquetes = () => {

  const [paquetes, setPaquetes] = useState([]);
  const [paqOne, setPaqOne] = useState([]);
  const [bandera, setBandera] = useState(false);
  const url = Global.url;

  const {user} = useAuth();

  useEffect( () => {
    getPaquetes();
  }, [paquetes.length]);

  const getPaquetes = () => {
    axios.get(url + 'paquetes/' + user).then( res => {
      setPaquetes(res.data.paquetes);
    })
  }

  const deletePaquete = (id) => {
    const idPaquete = paquetes[id]._id;
    axios.delete(url + "delete/" + idPaquete).then(res =>{
      getPaquetes();
    });
  }

  const updatePaquete = (id) => {
    const paque = paquetes[id];
    setPaqOne(paque)
    setBandera(true)
  }

  const updateBool = (band) => {
     setBandera(false)
  }

  return (

    <div className="ordenes">
      <h1 className="mt-5">Ordenes</h1>
      <div className="container mt-3">
        <div className="row row-cols-1 rows-cols-md-2 row-cols-lg-2">
          {
            !bandera ? (
              paquetes.length > 0 ?  (
                paquetes.map((paquete, i) => {
                  const fecha = new Date(paquete.fecha)
                  const fechaActual = new Date(Date.now())
                  if((fechaActual-fecha)/1000/60/60>24 && paquete.estado === "Guardado")
                    {
                      paquete.estado = "Completado"
                    }
                  return(
                    <Paquete
                      key={i}
                      id={i}
                      paqueteData={paquete}
                      delPaquete={deletePaquete}
                      updPaquete={updatePaquete}
                    />
                  );
                })
              ):(
                <h3 className="mx-auto">No hay órdenes creadas</h3>
              )
            ):(
              <div className="row row-cols-1 rows-cols-md-1 row-cols-lg-1">
                    <Update
                      paqueteData={paqOne}
                      updateBool={updateBool}
                    />
              </div>

            )
          }
        </div>
      </div>
    </div>

  )
}

export default Paquetes
