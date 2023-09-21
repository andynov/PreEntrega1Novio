import { useCartContext } from "../../../context/CartContext";
import "./CartWidget.css";

function CartWidget() {
    const { cantidadTotal } = useCartContext()
    return (
        <div>
            <img className="img-carrito" src="/cart.svg" alt="carrito" />
            {cantidadTotal() !== 0 && <strong className="numtotal">{cantidadTotal()}</strong>}
        </div>
    )
}

export default CartWidget