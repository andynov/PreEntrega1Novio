import { useState } from "react"
import { useCartContext } from "../../../context/CartContext"

import ItemCount from "../../ItemCount/ItemCount"
import { Link } from "react-router-dom"

import './ItemDetail.css'

const ItemDetail = ({instrument}) => {
  const [isCounter, setIsCounter] = useState(true)
  const {addInstrument, cartList} = useCartContext()
  const quant = (quantity) => {
    addInstrument({...instrument, quantity})
    setIsCounter(false)
  }



  return (
    <div className="item-detail-cart">
      <h1 className="title-detail"><strong>{instrument.name}</strong></h1>
      <div>
      </div>
      <div>
      <div>
        <img className="img-detail" src={instrument.imgUrl} alt="Instrument Img" />
      </div>

        <p className="description-detail">{instrument.description}</p>
        <p className="prize-detail">Prize: {instrument.precio}</p>
        <p className="stock-detail">Stock: {instrument.stock}</p>
      </div>
      <div>
        {
        isCounter ?
        <ItemCount initial={1} stock={instrument.stock} quantity={quant}  />
        :
        <>
          <Link to={'/'}>
          <button className="btn btn-outline-dark">Continue buying</button>
          </Link>
          <Link to={'/cart'}>
            <button className="btn btn-outline-dark">Go to Cart</button>
          </Link>
        </>
        }
      </div>
    </div>
  )
}

export default ItemDetail