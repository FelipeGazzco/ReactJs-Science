import React from "react";
import { useState } from "react";
import { Context } from "react";
import { useContext } from "react";
import {CartContext} from "./CartContext";

export const CustomCartContext = ({children})=>{
    const [productosCarritoAp, setProductosCarritoAp] = useState([]);

    const addItem = (item, cuenta) => { 
        if(isInCart(item.id)){
            const newProducts = [...productosCarritoAp];
            const productosindex = newProducts.findIndex(producto=>producto.id === item.id);
            newProducts [productosindex].cuenta = newProducts[productosindex].cuenta + cuenta;
            setProductosCarritoAp(newProducts);
        } else {
            const newProduct ={
                nombre: item.nombre,
                categoria: item.categoria,
                precio: item.precio,
                urlimg: item.urlimg,
                id: item.id,
                idReal: item.idReal,
                cuenta: cuenta
            }
            /*const newProduct ={
             item, cuenta
            }*/
            setProductosCarritoAp([...productosCarritoAp, newProduct])
        }
    }

    const removeItem = (itemId)=>{
        const nuevosProductos = productosCarritoAp.filter(producto=>producto.id !== itemId);
        setProductosCarritoAp(nuevosProductos);
    }

    const clear = ()=>{
        setProductosCarritoAp([]);
    }

    const isInCart = (id) =>{
        return productosCarritoAp.some(items => items.id === id)
    }

    const getTotalPrice = () => {
        const totalPrice = productosCarritoAp.reduce((acc, item)=>acc+(item.cuenta*item.precio*207),0);
        return totalPrice;
    }

    const getItemPrice = (item) => {
        const totalPrice = item.cuenta*item.precio*207
        return totalPrice;
    }
    
    const getTotalCount = () => {
        const totalCount = productosCarritoAp.reduce((acc,items)=>acc+items.cuenta,0);
        return totalCount
    }

    return(
        <CartContext.Provider value={{productosCarritoAp, getItemPrice, addItem, getTotalCount, getTotalPrice, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}