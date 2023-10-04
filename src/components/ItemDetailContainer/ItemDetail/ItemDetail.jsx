import { useState } from "react"
import { useCartContext } from "../../../context/CartContext"

import ItemCount from "../../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({instrument}) => {
  const [isCounter, setIsCounter] = useState(true)
  const {addInstrument, cartList} = useCartContext()
  const quant = (quantity) => {
    addInstrument({...instrument, quantity})
    setIsCounter(false)
  }



  return (
    <div className="row">
      <h1>Vista de Detalle</h1>
      <div className="col">
      </div>
      <div>
      <div className="card-body">
        <img className="w-25" src={instrument.imgUrl} alt="imagen instrumento" />
      </div>
        <h2><strong>{instrument.name}</strong></h2>
        <p>Descripción: {instrument.description}</p>
        <p>Precio: {instrument.precio}</p>
        <p>Stock: {instrument.stock}</p>
      </div>
      <div className="col">
        {
        isCounter ?
        <ItemCount initial={1} stock={instrument.stock} quantity={quant}  />
        :
        <>
          <Link to={'/'}>
          <button className="btn btn-outline-dark">Seguir comprando</button>
          </Link>
          <Link to={'/cart'}>
            <button className="btn btn-outline-dark">Ir al Carrito</button>
          </Link>
        </>
        }
      </div>
    </div>
  )
}

export default ItemDetail