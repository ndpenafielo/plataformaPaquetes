import React, {useState} from 'react';
import axios from "axios";
import {Navigate} from "react-router-dom"
import Global from "../Global";

const Registro = () =>{

  const url = Global.url;

  const [nuevoUsuario, setNuevoUsuario] = useState({
    name: null,
    email: null,
    username: null,
    password: null,

  });

  const [redirect, setRedirect] = useState(false);

  let nombreRef = React.createRef();
  let correoRef = React.createRef();
  let userRef = React.createRef();
  let pwRef = React.createRef();
  let pwConRef = React.createRef();



  const changeState = () => {
    setNuevoUsuario({
      name: nombreRef.current.value,
      email: correoRef.current.value,
      username: userRef.current.value,
      password: pwRef.current.value,

    });

    console.log(nuevoUsuario)
  }

  const sendData = (e) => {
    //evitamos que al recibir datos se recarge la pantalla
    e.preventDefault();
    changeState();
    //petición http con POST
    axios.post(url + 'register', nuevoUsuario).then( res => {
      setRedirect(true);
      console.log(res.data);
    })
  }

  if(redirect){
    return <Navigate to="/" />
  }


  return(
    <div className='registro-usuario'>
      <div id="formulario" className='card mx-auto mb-3 mt-5' style={{width: "30em"}}>
        <div className='card-header text-dark'>
          <h4>Registro Nuevo Usuario</h4>
        </div>
        <div className='card-body'>
          <form onSubmit={sendData}>
            <div className='mb-3'>
              <label>Nombre</label>
              <input type="text" className="form-control" id="nombre" name="nombre" ref={nombreRef} onChange={changeState} required/>
            </div>
            <div className='mb-3'>
              <label>Correo</label>
              <input type="email" className="form-control" id="correo" name="correo" ref={correoRef} onChange={changeState} required/>
            </div>
            <div className='mb-3'>
              <label>Usuario</label>
              <input type="text" className="form-control" id="usuario" name="usuario" ref={userRef} onChange={changeState} required/>
            </div>
            <div className='mb-3'>
              <label>Password</label>
              <input type="password" className="form-control" id="password" name="password" ref={pwRef} onChange={changeState} required />
            </div>
            <div className='mb-3'>
              <label>Confirmar Password</label>
              <input type="password" className="form-control" id="conf-password" name="conf-password" ref={pwConRef} onChange={changeState} required />
            </div>

            <div className='mb-3'>
              <input className="btn btn-primary" type="submit" id="create" value="Registrarse" />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Registro
