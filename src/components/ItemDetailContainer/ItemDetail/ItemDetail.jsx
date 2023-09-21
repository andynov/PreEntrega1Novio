import { useState } from "react"
import { useCartContext } from "../../../context/CartContext"

import ItemCount from "../../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({instrumento}) => {
  const [isCounter, setIsCounter] = useState(true)
  const {addInstrumento, cartList} = useCartContext()
  const cantidad = (quantity) => {
    addInstrumento({...instrumento, quantity})
    setIsCounter(false)
  }



  return (
    <div className="row">
      <h1>Vista de Detalle</h1>
      <div className="col">
      </div>
      <div>
      <div className="card-body">
        <img className="w-25" src={instrumento.imgUrl} alt="imagen instrumento" />
      </div>
        <h2><strong>{instrumento.name}</strong></h2>
        <p>Descripción: {instrumento.description}</p>
        <p>Precio: {instrumento.precio}</p>
        <p>Stock: {instrumento.stock}</p>
      </div>
      <div className="col">
        {
        isCounter ?
        <ItemCount inicial={1} stock={instrumento.stock} cantidad={cantidad}  />
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