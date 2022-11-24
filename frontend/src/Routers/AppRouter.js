import React from "react";
import Header from "../components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import New from "../components/New";
import Paquetes from "../components/Paquetes"
import Inicio from "../components/Inicio";
import Registro from "../components/Registro";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Cerrar from "../components/Cerrar";

const AppRouter = () => {

  return(
    <Router>
      <Header/>
        <Routes>

          <Route exact path='/' element={<PublicRoute/>}>
            <Route exact path="/" element={<Inicio/>}/>
          </Route>

          <Route exact path='/register' element={<PublicRoute/>}>
            <Route exact path="/register" element={<Registro/>}/>
          </Route>

          <Route exact path='/paquetes' element={<PrivateRoute/>}>
            <Route exact path='/paquetes' element={<Paquetes/>}/>
          </Route>

          <Route exact path='/crearOrden' element={<PrivateRoute/>}>
            <Route exact path="/crearOrden" element={<New/>}/>
          </Route>

          <Route exact path='/cerrar' element={<PrivateRoute/>}>
            <Route exact path="/cerrar" element={<Cerrar/>}/>
          </Route>


        </Routes>

    </Router>
  )
}

export default AppRouter;
