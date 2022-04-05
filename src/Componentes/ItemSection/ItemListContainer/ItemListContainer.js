import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {collection, doc, getDocs} from "firebase/firestore";
import { db } from "../../../utils/Firebase";

function ItemListContainer(props){
  const { category } = useParams();
  console.log(category);
  const [ListaItemsMostrar, setProductos] = useState([]);

  useEffect(() => {

    const getData = async() => {
      //carga inicial
      const query = collection(db, "items");
      const response = await getDocs(query);
      console.log("respuesta", response);

      /*carga id
      const newDocument={
          id: doc.id,
          data: doc.data()
      }*/

      //carga datos 
      const dataItems = response.docs.map(doc => {return{id: doc.id, ...doc.data()}});
      console.log("data Items", dataItems);
      setProductos(dataItems);

      if (!category) {
        setProductos(dataItems);
      } else {
        setProductos(dataItems.filter (dataItems => dataItems.categoria === category));
      }
    }

    getData();

  }, [category]);

  return (
    <>
      <ItemList productos={ListaItemsMostrar} />
    </>
  );
}

export default ItemListContainer;