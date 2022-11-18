import React from "react";
import logo from "../assets/images/logo.png"
import {NavLink} from "react-router-dom"

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                    <img className="App-logo" src={logo} alt="logo" width="80"/>
                </NavLink>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="register" className="nav-link"> Registro </NavLink>
                </li>
            </ul>
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
            </div>
        </nav>
    );
}

export default Header;
