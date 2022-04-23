import { Link } from "react-router-dom"
import logo from "./quehacescapo.png"
import React from "react";

function Cuatro(){
    return(
        <div>
            <h2>¿Que haces aca genio?</h2>
            <img src={logo}></img>
            <p>Volve rapido a inicio que no te vean aca</p>
            <Link to={"/"}>
                <button>Volver a inicio</button>
            </Link>
        </div>
    )
}

export default Cuatro;