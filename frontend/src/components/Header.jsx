import React from "react";
import logo from "../assets/images/logo.png"
import {NavLink} from "react-router-dom"
import useAuth from "./useAuth";

const Header = () => {

    const {user} = useAuth();

    if(user){

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container">
                    <NavLink to="/" className="navbar-brand">
                        <img className="App-logo" src={logo} alt="logo" width="80"/>
                    </NavLink>

                <div className="navbar-nav">
                        <h1 className="h1 text-white"> Bienvenido - {user}      </h1>
                </div>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="crearOrden" className="nav-link"> Crear Orden </NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="paquetes" className="nav-link"> Ordenes del Usuario </NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/cerrar" className="nav-link"> Cerrar Sesión </NavLink>
                    </li>
                </ul>

                </div>
            </nav>
        );

    } else {

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container">
                    <NavLink to="/" className="navbar-brand">
                        <img className="App-logo" src={logo} alt="logo" width="80"/>
                    </NavLink>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/register" className="nav-link"> Registrarse </NavLink>
                    </li>
                </ul>

                </div>
            </nav>
        );

    }


}

export default Header;
