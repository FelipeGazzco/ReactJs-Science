import React from "react";
import { async } from '@firebase/util';
import { useContext, useState } from "react";
import {CartContext} from "../../Context/CartContext";
import {collection, doc, getDoc, addDoc, updateDoc, Timestamp} from "firebase/firestore";
import { db } from "../../utils/firebase";
import './Cart.css';
import { Link } from "react-router-dom";

function EndBuy(props){

    const carritoContext = useContext(CartContext);
    const productosCarritoAp2 = carritoContext.productosCarritoAp;
    const clear = carritoContext.clear;


    const sendOrder = (e) => {
        e.preventDefault();
        const nombre = e.target[0].value;
        const phone = e.target[1].value;
        const email = e.target[2].value;
        //probar meter todo esto en update
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
        const ordersCollection = collection(db, 'orders');
        clear();
    }

    /*const updateProduct = async()=>{
        const docReference = doc(db,'items', e);
        const docResponse =  await getDoc(docReference);
        const docData = docResponse.data();
        console.log('informacion documento json', docData);
        await updateDoc(docReference,{...docData, stock: 10});
    }

    const updateOrder = async()=>{
        const orderReference = doc(db,'orders', );
        const docResponse = await getDoc(orderReference);
        const orderInfo = docResponse.data();
        console.log('info orden', orderInfo);
        await updateDoc(orderReference,{...orderInfo, buyer:{...orderInfo.buyer}})
    }*/

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
