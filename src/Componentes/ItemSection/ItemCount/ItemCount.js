import React, {useState, useEffect} from "react";
import Cuenta from "../Cuenta/Cuenta";

function ItemCount(props){ 

    const [cuenta, setCuenta] = useState(0);
    console.log(props.initial);
    console.log(props.stock);

    const SumaProducto = (e) => {
      const sumarCarrito = e.target.getAttribute("name");
      if (props.stock > cuenta) {
        setCuenta(cuenta + 1);
      }else {
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
    const ReseteoProducto = () => {
      setCuenta(props.initial)
    }

    useEffect(() => {}, []);

    return (
        <div>
          {cuenta === 0 ? (
            <p> ? </p>
          ) : (
            <Cuenta cuenta={cuenta} />
          )}
    
          <button onClick={SumaProducto} name="comprar">
            Sumar al carrito{" "}
          </button>
          <button onClick={RestaProducto} name="resta">
            Sacar del carrito{" "}
          </button>
          <button onClick={ReseteoProducto} name="reset"> 
            Reset 
          </button>
          <section>
            <button disabled={props.stock===0} onClick={() => {props.onAddFunctionIC(cuenta); ReseteoProducto()}}> Agregar al carrito</button>
          </section>
        </div>
    );
}

export default ItemCount;
