import React from "react";
import Cuenta from "../Cuenta/Cuenta";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "react";
import { CartContext } from "../../../Context/CartContext";
import { CustomCartContext } from "../../../Context/CustomCartContext";


function ItemDetail({nombre, urlimg, stock, initial, precio, categoria}){

    const carritoContext = useContext(CartContext);
    const [productosAgregados, setProductosAgregados] = useState(0);
    const [stockProducto, setStockProducto] = useState(stock);

    const onAddFunctionIC = (unidadesASumar) => {
        console.log("pringles")
        console.log(unidadesASumar);
        setProductosAgregados(unidadesASumar);
        setStockProducto(stock - unidadesASumar);
        carritoContext.addItem(nombre, unidadesASumar, urlimg,stock, initial, precio, categoria);
    }

    return(
        <div className="ItemDetail">
        <h1> {nombre} </h1>
        <img src={urlimg}></img>
        <p> ${precio * 207} </p>
        <p> {categoria} </p>
        <ItemCount initial={initial} stock={stock} onAddFunctionIC={onAddFunctionIC}/>
    </div>
    )
}

export default ItemDetail;