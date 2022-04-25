import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./ItemDetail.css";


function ItemDetail({item}){

    const carritoContext = useContext(CartContext);
    const [productosAgregados, setProductosAgregados] = useState(0);
    const [stockProducto, setStockProducto] = useState(10);

    return(
        <div className="ItemDetail">
            <div>
                <h1> {item.nombre} </h1>
                <img src={item.urlimg}></img>
                <p> ${item.precio * 207} </p>
                <p>{item.stock} en stock</p>
                <p> {item.categoria} </p>
                <ItemCount initial={item.initial} stock={item.stock} item= {item}/>
            </div>
            <div className="divDos">
                {item.texto}
            </div>
        </div>
    )
}

export default ItemDetail;