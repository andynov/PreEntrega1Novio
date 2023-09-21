import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
    const {cartList, deleteCart, precioTotal, cantidadTotal, eliminarItem} = useCartContext()

  return (
    <div>
      {cartList.map (instrumento => <div key={ instrumento.id}>
        <img className="w-25" src={instrumento.imgUrl} alt="imagen instrumento" />
        {instrumento.name} - {instrumento.precio} - {instrumento.quantity}
        <button onClick={ () => eliminarItem(instrumento.id)}>🛑</button>
        </div>)}
        {precioTotal() !== 0 && <p>Precio Total: <strong>${precioTotal()}</strong></p>}
        {cantidadTotal() !==0 ? (<button onClick={deleteCart}>Vaciar Carrito</button>) : 
          (<div>
              <h2>No hay Instrumentos en el carrito</h2>
              <Link to={'/'}>
                  <button className="btn btn-outline-secondary">Volver a Inicio</button>
              </Link>
          </div>)
        }
    </div>
  )
}

export default CartContainer