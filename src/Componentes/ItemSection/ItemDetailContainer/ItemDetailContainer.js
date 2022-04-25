import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {collection, doc, getDocs} from "firebase/firestore";
import { db } from "../../../utils/firebase";
import "./ItemDetailContainer.css";

function ItemDetailContainer(){

  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [ListaItemsMostrar, setProductos] = useState([]);

  useEffect(() => {

    const getData = async() => {
      //carga inicial
      const query = collection(db, "items");
      const response = await getDocs(query);

      /*carga id
      const newDocument={
          id: doc.id,
          data: doc.data()
      }*/

      //carga datos 
      const dataItems = response.docs.map(doc => {return{id: doc.id, ...doc.data()}});
      setProductos(dataItems);
      setProducto(dataItems.find((e) => e.id == id));
    }
    getData();

  }, []);

  return (
    <div className="centering">
      <ItemDetail item={producto} />;
    </div>
  )
};

export default ItemDetailContainer;
