import React from "react";
import "./NavBar.css";
import logo from "./biology.png";

function NavBar(){
    return(
        <div className="NavBar">
            <section>
                <img src={logo} alt="logo png"></img>
                <p>Science Fair</p>
            </section>
            <section>
                <ul>
                    <li>Inicio</li>
                    <li>Ciencia</li>
                    <li>Tecnologia</li>
                    <li>Libros</li>
                </ul>
            </section>
        </div>
    )
}

export default NavBar;