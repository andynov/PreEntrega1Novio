import ItemCount from "../../ItemCount/ItemCount"

const ItemDetail = ({instrumento}) => {
  const cantidad = (count) => {
    console.log('instrumentos agregados :', count)
  } 


  return (
    <div className="row">
      <h2>Vista de Detalle</h2>
      <div className="col">
      </div>
      <div>
        <strong>{instrumento.name}</strong>
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