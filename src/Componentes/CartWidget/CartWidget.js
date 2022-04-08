import logo from "./carro-de-la-carretilla.png"
import "./CartWidget.css"
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div className="CartWidget"> 
        <Link to={`/cart/`} className="">
          <img src={logo}/>
        </Link>
    </div>
  );
}

export default CartWidget;