import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import New from "./components/New";
import Paquetes from "./components/Paquetes"
import Inicio from "./components/Inicio";
import Registro from "./components/Registro";

const Router = () => {

  return(
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/register" element={<Registro/>}/>

        <Route exact path="/paquetes" element={<Paquetes/>}/>
        <Route exact path="/crearOrden" element={<New/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default Router;
