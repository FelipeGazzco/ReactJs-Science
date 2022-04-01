import React from "react";
import { useState } from "react";
import { Context } from "react";
import { useContext } from "react";
import {CartContext} from "./CartContext";

export const CustomCartContext = ({children})=>{
    const [productosCarritoAp, setProductosCarritoAp] = useState([]);

    const addItem = (item, unidadesASumar) => {
        const newProduct = {
            item, unidadesASumar
        }
        console.log(newProduct)
        setProductosCarritoAp([...productosCarritoAp, newProduct])
    }

    const removeItem = (itemId)=>{
        console.log('itemId', itemId);
        const nuevosProductos = productosCarritoAp.filter(producto=>producto.item.id !== itemId);
        console.log('nuevosProductos',nuevosProductos)
        setProductosCarritoAp(nuevosProductos);
    }

    // Remover todos los items
    const clear = ()=>{
        setProductosCarritoAp([]);
    }

    // valida si un producto ya existe en el carrito
    const isInCart = (id) =>{
        //some
        //return valor
    }

    return(
        <CartContext.Provider value={{productosCarritoAp, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}