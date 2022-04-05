import React from "react";
import Cuenta from "../Cuenta/Cuenta";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "react";
import { CartContext } from "../../../Context/CartContext";
import { CustomCartContext } from "../../../Context/CustomCartContext";


function ItemDetail({id, nombre, urlimg, stock, initial, precio, categoria, cuenta}){

    const carritoContext = useContext(CartContext);
    const [productosAgregados, setProductosAgregados] = useState(0);
    const [stockProducto, setStockProducto] = useState(stock);

    const onAddFunctionIC = (props) => {
        console.log("pringles")
        console.log(cuenta);
        setProductosAgregados(cuenta);
        setStockProducto(stock - cuenta);
        carritoContext.addItem(props.nombre, props.cuenta, props.id, props.urlimg, props.stock, props.initial, props.precio, props.categoria);
    }

    return(
        <div className="ItemDetail">
        <h1> {nombre} </h1>
        <img src={urlimg}></img>
        <p> ${precio * 207} </p>
        <p> {categoria} </p>
        <ItemCount nombre={nombre} id={id} urlimg={urlimg} precio={precio} categoria={categoria} initial={initial} stock={stock} onAddFunctionIC={onAddFunctionIC}/>
    </div>
    )
}

export default ItemDetail;