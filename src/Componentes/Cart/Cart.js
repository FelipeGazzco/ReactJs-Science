import React from "react";
import { useContext } from "react";
import {CartContext} from "../../Context/CartContext";
import { CustomCartContext } from "../../Context/CustomCartContext";

function Cart(){
    const carritoContext = useContext(CartContext);
    const productosCarrito= carritoContext.productosCarritoAp;
    console.log("Productos", productosCarrito);
    return(
        <ul>
            {productosCarrito?.map(u => (
                <li key={u.id}>
                    <p> nombre = {u.item}</p>
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