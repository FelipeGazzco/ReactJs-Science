import logo from "./carro-de-la-carretilla.png"
import "./CartWidget.css"

function CartWidget() {
  return (
    <div className="CartWidget"> 
        <img src={logo}/>
    </div>
  );
}

export default CartWidget;