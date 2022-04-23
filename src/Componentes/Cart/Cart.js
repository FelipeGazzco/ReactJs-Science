import React from "react";
import { async } from '@firebase/util';
import { useContext, useState } from "react";
import {CartContext} from "../../Context/CartContext";
import {collection, doc, getDoc, addDoc, updateDoc, Timestamp} from "firebase/firestore";
import { db } from "../../utils/firebase";
import './Cart.css';
import { Link } from "react-router-dom";
import EndBuy from "./EndBuy"


function Cart(){
    const carritoContext = useContext(CartContext);
    const productosCarritoAp2 = carritoContext.productosCarritoAp;
    const clear = carritoContext.clear;
    const getTotalPrice = carritoContext.getTotalPrice;
    const getItemPrice = carritoContext.getItemPrice;
    console.log(productosCarritoAp2);
    const [show, setShow] = useState(false);

    //const { productosCarritoAp2, addItem, removeItem} = useContext(CartContext);
    return(
        <div>
            <ul className="Cart">
               <h1>Productos en carrito:</h1>
               {productosCarritoAp2?.map(u => (
                   <li key={u.id}>
                       <div>
                          <h2>{u.nombre}</h2>
                          <img src={u.urlimg} alt="Foto item cart"></img>
                       </div>
                       <div>
                          <p>{u.cuenta} en carrito</p>
                          <p> {getItemPrice(u)}</p>
                          <button onClick={()=>carritoContext.removeItem(u.id)}>Eliminar producto</button>
                       </div>
                   </li>
               ))}
               <p>Total: ${getTotalPrice()}</p>
               <button onClick={clear}>Vaciar Cart</button>
               <button onClick={() => setShow(!show)}>Terminar compra</button>
           </ul>
           <EndBuy show={show} setShow={setShow} />
        </div>
        /*<ul className="ItemList">
        {productos?.map(
          u => <li key={u.id}> <ItemBase id={u.id}nombre={u.nombre} categoria={u.categoria} urlimg={u.urlimg} initial={u.initial} stock={u.stock} precio={u.precio}/> </li>)}
      </ul>*/
    )
}

export default Cart;