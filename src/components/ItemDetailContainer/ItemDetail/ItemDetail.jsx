import { useCartContext } from "../../../context/CartContext"

import ItemCount from "../../ItemCount/ItemCount"

const ItemDetail = ({instrumento}) => {
  const {addInstrumento, cartList} = useCartContext()
  const cantidad = (quantity) => {
    addInstrumento({...instrumento, quantity})
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
        <ItemCount inicial={1} stock={instrumento.stock} cantidad={cantidad}  />
      </div>
    </div>
  )
}

export default ItemDetail