import logo from "./carro-de-la-carretilla.png"
import "./CartWidget.css"
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

function CartWidget() {

  const context = useContext(CartContext);
  const getTotalCount = context.getTotalCount;
  const carrito = context.productosCarritoAp2;

  /*if(carrito === []){
    return (
      <div className="CartWidget"> 
          <Link to={`/cart/`} className="LinkCartWidget">
            <img src={logo}/>
            <p>{getTotalCount()}</p>
          </Link>
      </div>
    );
  } else {
    return (
      <p className="CartWidget">1</p>
    )
  }*/
  return (
    <div className="CartWidget"> 
        <Link to={`/cart/`} className="LinkCartWidget">
          <img src={logo}/>
          <p>{getTotalCount()}</p>
        </Link>
    </div>
  );
}

export default CartWidget;