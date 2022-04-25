import React from "react";
import { async } from '@firebase/util';
import { useContext, useState } from "react";
import {CartContext} from "../../Context/CartContext";
import {collection, where, doc, getDoc, addDoc, increment, updateDoc, writeBatch, Timestamp, query, getDocs, documentId} from "firebase/firestore";
import { db } from "../../utils/firebase";
import './Cart.css';
import { Link } from "react-router-dom";

function EndBuy(props){

    const carritoContext = useContext(CartContext);
    const productosCarritoAp2 = carritoContext.productosCarritoAp;
    const clear = carritoContext.clear;
    const [orderId, setOrderId] = useState(null)

    const sendOrder = async(e) => {
        e.preventDefault();
        const nombre = e.target[0].value;
        const phone = e.target[1].value;
        const email = e.target[2].value;

        const ordersCollection = collection(db, 'orders');
        const productosRef = collection(db, 'items')

        const newOrder = {
            buyer:{
                name: nombre,
                phone,
                email
            },
            items: productosCarritoAp2,
            total: carritoContext.getTotalPrice()*207,
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const productCartIds = productosCarritoAp2.map((el) => el.id)
        const q = query(productosRef, where(documentId(), 'in', productCartIds))
        const productos = await getDocs(q)
        const outOfStock = []


        const docReference = await addDoc(ordersCollection, newOrder).then((doc) => {
            alert("Gracias por tu compra. Tu codigo de orden es " + (doc.id) + ".");
        });

        clear();
    }

    if(props.show){
        return(
            <form onSubmit={sendOrder}>
                <input type="text" placeholder="Nombre y apellido" required></input>
                <input type="text" placeholder="Telefono" required></input>
                <input type="email" placeholder="Mail" required></input>
                <button type="submit">Enviar orden</button>
            </form>
        )   
    } else {
        return(
            <Link to="/">
            Volver a Inicio
           </Link>
        )
    }
}

export default EndBuy;
