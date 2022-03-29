import React from "react";
import "./NavBar.css";
import logo from "./biology.png";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="NavBar">
            <section>
                <img src={logo} alt="logo png"></img>
                <p>Science Fair</p>
            </section>
            <section>
                <ul>
                  <Link to={`/productos/`} className="">
                  Inicio
                  </Link>
                  <Link to={`/productos/Ciencia`} className="">
                  Ciencia
                  </Link>
                  <Link to={`/productos/Tecnologia`} className="">
                  Tecnologia
                  </Link>
                  <Link to={`/productos/Libros`} className="">
                  Libros
                  </Link>
                </ul>
            </section>
        </div>
    )
}

export default NavBar;