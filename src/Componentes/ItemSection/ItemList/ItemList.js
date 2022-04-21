import React from "react";
import ItemBase from "../ItemBase/ItemBase";

function ItemList({productos}){
    return (
        <ul className="ItemList">
          {productos?.map(
            u => <li key={u.id}> <ItemBase id={u.id}nombre={u.nombre} categoria={u.categoria} urlimg={u.urlimg} initial={u.initial} stock={u.stock} precio={u.precio}/> </li>)}
        </ul>
    );
}

export default ItemList;