import logo from "./carro-de-la-carretilla.png"
import "./CartWidget.css"
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div className="CartWidget"> 
        <img src={logo}/>
        <Link to={`/cart/`} className="">
          Carrito
        </Link>
    </div>
  );
}

export default CartWidget;