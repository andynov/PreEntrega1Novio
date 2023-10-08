const ItemCart = ({cartList, deleteItem}) => {
  return (
    <div>
        {cartList.map (instrument => <div key={ instrument.id}>
            <img className="w-25" src={instrument.imgUrl} alt="imagen instrumento" />
            {instrument.name} - {instrument.precio} - {instrument.quantity}
            <button onClick={ () => deleteItem(instrument.id)}>🛑</button>
            </div>)}
    </div>
  )
}

export default ItemCart