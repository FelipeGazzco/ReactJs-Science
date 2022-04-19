import React from "react";
import { useContext } from "react";
import {CartContext} from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { CustomCartContext } from "../../Context/CustomCartContext";
import {collection, doc, getDoc, addDoc, updateDoc, Timestamp} from "firebase/firestore";
import { db } from "../../utils/firebase";
import './Cart.css';


function Cart(){
    const carritoContext = useContext(CartContext);
    const productosCarritoAp2 = carritoContext.productosCarritoAp;
    const removeItem = carritoContext.removeItem;
    const clear = carritoContext.clear;
    const getTotalPrice = carritoContext.getTotalPrice;
    const getItemPrice = carritoContext.getItemPrice;
    const deleteItem = carritoContext.deleteItem;
    console.log(productosCarritoAp2);

    const sendOrder = (e) => {
        e.preventDefault();
        const nombre = e.target[0].value;
        const phone = e.target[1].value;
        const email = e.target[2].value;
        const newOrder = {
            buyer:{
                name: nombre,
                phone,
                email
            },
            items: productosCarritoAp2,
            total: carritoContext.getTotalPrice(),
            date: Timestamp.fromDate(new Date())
        }
        const ordersCollection = collection(db, 'orders');
        const docReference = addDoc(ordersCollection, newOrder);
        const updateProduct = async()=>{
            const docReference = doc(db,'items');
            const docResponse = getDoc(docReference);
            const docData = docResponse.data();
            console.log('informacion documento json', docData);
            await updateDoc(docReference,{...docData, stock: 10});
        }
    
        const updateOrder = async()=>{
            const orderReference = doc(db,'orders');
            const docResponse = getDoc(orderReference);
            const orderInfo = docResponse.data();
            console.log('info orden', orderInfo);
            await updateDoc(orderReference,{...orderInfo, buyer:{...orderInfo.buyer, name: nombre}})
        }
        updateProduct();
        updateOrder();
    }

    //const { productosCarritoAp2, addItem, removeItem} = useContext(CartContext);
    return(
        <ul className="Cart">
            <h1>Productos en carrito:</h1>
            <button onClick={clear}>Vaciar Cart</button>
            {productosCarritoAp2?.map(u => (
                <li key={u.id}>
                    <div>
                       <h2>{u.nombre}</h2>
                       <img src={u.urlimg} alt="Foto item cart"></img>
                    </div>
                    <div>
                       <p>{u.cuenta} en carrito</p>
                       <p> {getItemPrice(u)}</p>
                       <button onClick={deleteItem(u.id)}>Eliminar producto</button>
                    </div>
                </li>
            ))}
            <p>Total: ${getTotalPrice()}</p>
            <form onSubmit={sendOrder}>
                <input type="text" placeholder="Nombre"></input>
                <input type="text" placeholder="Telefono"></input>
                <input type="email" placeholder="Mail"></input>
                <button type="submit">Enviar orden</button>
            </form>
        </ul>

        /*<ul className="ItemList">
        {productos?.map(
          u => <li key={u.id}> <ItemBase id={u.id}nombre={u.nombre} categoria={u.categoria} urlimg={u.urlimg} initial={u.initial} stock={u.stock} precio={u.precio}/> </li>)}
      </ul>*/
    )
}

export default Cart;