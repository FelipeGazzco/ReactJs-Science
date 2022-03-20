import React, {useState, useEffect} from "react";
import Cuenta from "../Cuenta/Cuenta";

function ItemCount(props){ 

    const [cuenta, setCuenta] = useState(props.initial);

    const SumaProducto = (e) => {
      const sumarCarrito = e.target.getAttribute("name");
      if (sumarCarrito === "comprar") {
        if (props.stock > cuenta) setCuenta(cuenta + 1);
      } else {
        alert("Sin stock");
      }
    };
    const RestaProducto = (e) => {
      if (cuenta > 0) {
        setCuenta(cuenta - 1);
      } else {
        alert("Tenes que tener algo en el carrito");
      }
    };
    useEffect(() => {}, []);

    return (
        <div>
          {cuenta === 0 ? (
            <p> ? </p>
          ) : (
            <Cuenta cuenta={cuenta} />
          )}
    
          <button onClick={SumaProducto} className="btn btn-success" name="comprar">
            Sumar al carrito
          </button>
          <button
            onClick={RestaProducto}
            className="btn btn-danger"
            name="restar"
          >
            Sacar del carrito{" "}
          </button>
        </div>
    );
}

export default ItemCount;
