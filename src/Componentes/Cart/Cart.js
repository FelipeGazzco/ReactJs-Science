import React from "react";
import { useContext } from "react";
import {CartContext} from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { CustomCartContext } from "../../Context/CustomCartContext";

function Cart(){

    const { productosCarritoAp, addItem, removeItem} = useContext(CustomCartContext);
    return(
        <ul>
            <h1>Productos en carrito:</h1>
            {productosCarritoAp?.map(u => (
                <li key={u.id}>
                    <h2>{u.item}</h2>
                    <img src={u.urlimg} alt="Foto item cart"></img>
                    <p>{u.cuenta} en carrito</p>
                    <button onClick={removeItem(u.id)}></button>
                </li>
            ))}
        </ul>

        /*<ul className="ItemList">
        {productos?.map(
          u => <li key={u.id}> <ItemBase id={u.id}nombre={u.nombre} categoria={u.categoria} urlimg={u.urlimg} initial={u.initial} stock={u.stock} precio={u.precio}/> </li>)}
      </ul>*/
    )
}

export default Cart;