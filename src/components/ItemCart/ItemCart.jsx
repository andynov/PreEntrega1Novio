import './ItemCart.css'

const ItemCart = ({cartList, deleteItem}) => {
  return (
    <div className='table-container'>
        <table>
          <tbody>
            <tr>
              <th>Instrument</th>
              <th>Quantity</th>
              <th>Prize</th>
              <th>Delete</th>
            </tr>
          {cartList.map (instrument => <tr key={instrument.id}>
                <td><img className='img-Instrument' src={instrument.imgUrl} alt="imagen instrumento" /> {instrument.name}</td>
                <td>{instrument.quantity}</td>
                <td>{instrument.precio}</td>
                <td><button onClick={ () => deleteItem(instrument.id)}>🛑</button></td>
            </tr>)}
          </tbody>
        </table>

    </div>
  )
}

export default ItemCart