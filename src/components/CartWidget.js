//import carritoIcono from "./img/carrito-de-compras.png"
import { SlBasket } from "react-icons/sl";

function CartWidget(){
    return(
        <span class="icon-text">
            <SlBasket />
            <p>3</p>
        </span>
    );
}

export default CartWidget;