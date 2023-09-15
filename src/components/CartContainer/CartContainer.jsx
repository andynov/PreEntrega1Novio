import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
    const {cartList, deleteCart} = useCartContext()
    console.log(cartList)

  return (
    <div>
      {cartList.map (instrumento => <div key={ instrumento.id}>
        <img className="w-25" src={instrumento.imgUrl} alt="imagen instrumento" />
        {instrumento.name} - {instrumento.precio} - {instrumento.quantity}
        <button>🛑</button>
        </div>)}
      <button onClick={deleteCart}>Vaciar Carrito</button>
    </div>
  )
}

export default CartContainer