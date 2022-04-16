import React from "react";
import Cuenta from "../Cuenta/Cuenta";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "react";
import { CartContext } from "../../../Context/CartContext";
import { CustomCartContext } from "../../../Context/CustomCartContext";


function ItemDetail({item}){

    const carritoContext = useContext(CartContext);
    const [productosAgregados, setProductosAgregados] = useState(0);
    const [stockProducto, setStockProducto] = useState(10);

    return(
        <div className="ItemDetail">
        <h1> {item.nombre} </h1>
        <img src={item.urlimg}></img>
        <p> ${item.precio * 207} </p>
        <p> {item.categoria} </p>
        <ItemCount initial={item.initial} stock={item.stock} item= {item}/>
    </div>
    )
}

export default ItemDetail;