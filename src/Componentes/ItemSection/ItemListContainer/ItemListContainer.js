import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {collection, doc, getDocs} from "firebase/firestore";
import { db } from "../../../utils/firebase";

function ItemListContainer(props){
  const { category } = useParams();
  const [ListaItemsMostrar, setProductos] = useState([]);

  useEffect(() => {

    const getData = async() => {
      const query = collection(db, "items");
      const response = await getDocs(query);
      const dataItems = response.docs.map(doc => {return{id: doc.id, ...doc.data()}});
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