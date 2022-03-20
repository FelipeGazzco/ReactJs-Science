import React from "react";
import Cuenta from "../Cuenta/Cuenta";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({nombre, urlimg, stock, initial, precio, categoria}){
    return(
        <div className="ItemDetail">
        <h1> {nombre} </h1>
        <img src={urlimg}></img>
        <p> {precio} </p>
        <p> {categoria} </p>
        <ItemCount initial={initial} stock={stock} />
    </div>
    )
}

export default ItemDetail;