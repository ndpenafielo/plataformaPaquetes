import React, {useState} from 'react';
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom"
import Global from "../Global";

const Inicio = () =>{

  const url = Global.url;

  const [usuario, setUsuario] = useState({
    username: null,
    password: null
  });

  const [redirect, setRedirect] = useState(false);

  let userRef = React.createRef();
  let pwRef = React.createRef();


  const changeState = () => {
    setUsuario({
      username: userRef.current.value,
      password: pwRef.current.value,

    });

    console.log(usuario)
  }

  const sendData = (e) => {
    //evitamos que al recibir datos se recarge la pantalla
    e.preventDefault();
    changeState();
    var bandera = true;
    //petición http con POST
    axios.post(url + 'login', usuario).catch( error => {
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        alert(error.response.data);
        bandera = false
      }
    }).then( res => {
      setRedirect(bandera);
    })
  }

  const navigate = useNavigate();

  if(redirect){
    return <Navigate to="/paquetes" />
  }


  return(
    <div className='inicio-usuario'>
      <div id="formulario" className='card mx-auto mb-3 mt-5' style={{width: "30em"}}>
        <div className='card-header text-dark'>
          <h4>Iniciar Sesión</h4>
        </div>
        <div className='card-body'>
          <form onSubmit={sendData}>
            <div className='mb-3'>
              <label>Usuario</label>
              <input type="text" className="form-control" id="usuario" name="usuario" ref={userRef} onChange={changeState} required/>
            </div>

            <div className='mb-3'>
              <label>Password</label>
              <input type="password" className="form-control" id="password" name="password" ref={pwRef} onChange={changeState} required />
            </div>

            <div className='mb-3'>
              <input className="btn btn-primary" type="submit" id="create" value="Iniciar Sesión" />
            </div>

            <div className='mb-3'>
              <label>¿Aún no tienes una cuenta? <a className="pe-auto" onClick={() => navigate("/register")} >¡Entra Aqui!</a></label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Inicio
