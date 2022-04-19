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
            console.log("Actualizado", productosCarritoAp);
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
            console.log("Actualizado", productosCarritoAp);
        }
    }

    const removeItem = (itemId)=>{
        console.log('itemId', itemId);
        const nuevosProductos = productosCarritoAp.filter(producto=>producto.id !== itemId);
        console.log('nuevosProductos',nuevosProductos);
        setProductosCarritoAp(nuevosProductos);
    }

    // Remover todos los items
    const clear = ()=>{
        setProductosCarritoAp([]);
    }

    const deleteItem = (item2id) =>{
        var newArray = productosCarritoAp.filter((item) => item.id !== item2id);
        console.log(newArray);
    }

    // valida si un producto ya existe en el carrito
    const isInCart = (id) =>{
        return productosCarritoAp.some(items => items.id === id)
        //some
        //return valor
    }

    const getTotalPrice = () => {
        const totalPrice = productosCarritoAp.reduce((acc, item)=>acc+(item.cuenta*item.precio*207),0);
        return totalPrice;
    }

    const getItemPrice = (item) => {
        //const totalPrice = productosCarritoAp.reduce((acc, item)=>acc+(item.cuenta*item.precio*207),0);
        const totalPrice = item.cuenta*item.precio*207
        return totalPrice;
    }
    
    const getTotalCount = () => {
        const totalCount = productosCarritoAp.reduce((acc,items)=>acc+items.cuenta,0);
        console.log(totalCount);
        return totalCount
    }

    return(
        <CartContext.Provider value={{productosCarritoAp, deleteItem, getItemPrice, addItem, getTotalCount, getTotalPrice, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}