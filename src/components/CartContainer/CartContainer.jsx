import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
    const {cartList} = useCartContext()

  return (
    <div>CartContainer</div>
  )
}

export default CartContainer