import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function ItemBase({urlimg, nombre, categoria, stock, initial, precio, id}){
    return(
        <div>
            <img src={urlimg}></img>
            <p>  {nombre}  </p>
            <p> ${precio * 207} </p>
            <p>Categoria: {categoria}</p>
            <button>
            <Link to={`/detail/${id}`} className="">
                Ver Mas
            </Link>
            </button>
        </div>
    )
}

export default ItemBase;