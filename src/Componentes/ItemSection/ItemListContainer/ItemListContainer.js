import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props){
  const { category } = useParams();
  console.log(category);
  const [ListaItemsMostrar, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          [
            {nombre : "Telescopio moderno", id : "0", urlimg : "https://http2.mlstatic.com/D_NQ_NP_664201-MLA48464802523_122021-O.webp", stock : 10, initial: 0, categoria : "Ciencia", precio : "115"},
            {nombre : "Spot el robot", id : "1", urlimg : "https://www.eluniverso.com/resizer/bPzGuU2RUMvBzllYeRLoqIefQOA=/1191x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/VOUFYZGJT5HVBO4NHTXYRG47VU.jpg", stock : 10, initial: 0, categoria : "Tecnologia", precio : "74500"},
            {nombre : "Stephen Hawking: Agujeros Negros", id : "2", urlimg : "https://images.cdn2.buscalibre.com/fit-in/360x360/67/e1/67e1b5a040262be95c2b990986eb69f4.jpg", stock : 10, initial: 0, categoria : "Libros", precio : "6"}
          ]
        );
      }, 3000);
    });
    if (!category) {
      obtenerProductos.then((res) => setProductos(res));
    } else {
      obtenerProductos.then((res) => {
        setProductos(
          res.filter((ListaItemsMostrar) => ListaItemsMostrar.categoria === category)
        );
      });
    }
  }, [category]);

  return (
    <>
      <ItemList productos={ListaItemsMostrar} />
    </>
  );
}

export default ItemListContainer;