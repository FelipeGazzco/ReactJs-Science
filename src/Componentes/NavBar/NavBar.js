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
                  <Link to={`/detail/`} className="">
                  Inicio
                  </Link>
                  <Link to={`/detail/Ciencia`} className="">
                  Ciencia
                  </Link>
                  <Link to={`/detail/Tecnologia`} className="">
                  Tecnologia
                  </Link>
                  <Link to={`/detail/Libros`} className="">
                  Libros
                  </Link>
                </ul>
            </section>
        </div>
    )
}

export default NavBar;