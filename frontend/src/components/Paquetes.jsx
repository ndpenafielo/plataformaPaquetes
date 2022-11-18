import React, {useState, useEffect} from "react";
import axios from "axios";
import Global from "../Global";
import Paquete from "./Paquete";


const Paquetes = () => {

  const [paquetes, setPaquetes] = useState([]);
  const url = Global.url;

  useEffect( () => {
    getPaquetes();
    console.log(paquetes);

  }, [paquetes.length]);

  const getPaquetes = () => {
    axios.get(url + 'paquetes').then( res => {
      setPaquetes(res.data.paquetes);
    })
  }

  const deletePaquete = (id) => {
    const idPaquete = paquetes[id]._id;
    axios.delete(url + "delete/" + idPaquete).then(res =>{
      getPaquetes();
    });
  }

  return (
    <div className="ordenes">
      <h1 className="mt-5">Ordenes</h1>
      <div className="container mt-3">
        <div className="row row-cols-1 rows-cols-md-2 row-cols-lg-2">
          {
            paquetes.length > 0 ? (
              paquetes.map((paquete, i) => {
                return(
                  <Paquete
                    key={i}
                    id={i}
                    paqueteData={paquete}
                    delPaquete={deletePaquete}
                  />
                );
              })
            ):(
              <h3 className="mx-auto">No hay órdenes creadas</h3>
            )
          }
        </div>
      </div>
    </div>

  )
}

export default Paquetes
