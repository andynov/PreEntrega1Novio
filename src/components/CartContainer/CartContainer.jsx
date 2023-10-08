import { Link } from "react-router-dom"
import { addDoc, collection, doc, getFirestore, writeBatch } from 'firebase/firestore'
import { useState } from "react"

import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    name:'',
    phone:'',
    email:''
  })

  const [id, setId] = useState('')
  
  const {cartList, deleteCart, precioTotal, quantityTotal, deleteItem} = useCartContext()
  
  const handleAddOrder = async (evt) => {
    evt.preventDefault()
    const order = {}
    order.buyer = {name: 'Andy', phone: '18574234', email: 'andres@comprador.com'}
    order.items = cartList.map(instrument =>{
      return {id: instrument.id, precio: instrument.precio, quantity: instrument.quantity}})
    order.total = precioTotal()
    
    // agregar una orden en Firestore
    const queryDB = getFirestore()
    const orderCollection = collection(queryDB, 'orders')
    addDoc(orderCollection, order)
    .then(({id}) => setId(id))
    .catch(err => console.log(err))
    .finally(() => {
      setDataForm({name:'', phone:'', email:''})
      deleteCart()
    })
    
    // actualizar un documento

    //const batch = writeBatch(queryDB)

    // batch.update()
  }

  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm, 
      [evt.target.name] : evt.target.value })
  }

  return (
    <>
      {id !== '' && <h2>Muchas gracias por su compra. Su orden es: {id}</h2>}
      {quantityTotal() ==! 0 ?
        <div>
          {cartList.map (instrument => <div key={ instrument.id}>
            <img className="w-25" src={instrument.imgUrl} alt="imagen instrumento" />
            {instrument.name} - {instrument.precio} - {instrument.quantity}
            <button onClick={ () => deleteItem(instrument.id)}>🛑</button>
            </div>)}

          <p>Precio Total: <strong>${precioTotal()}</strong></p>
          
          <button onClick={deleteCart}>Vaciar Carrito</button>
    `
          <form onSubmit={handleAddOrder}>
            <input type='text' name='name' placeholder='Ingrese su nombre' value={dataForm.name} onChange={handleOnChange} />
            <input type='number' name='phone' placeholder='Ingrese su teléfono' value={dataForm.phone} onChange={handleOnChange} />
            <input type='email' name='email' placeholder='Ingrese su email' value={dataForm.email} onChange={handleOnChange} />
            <button className="btn btn-outline-secondary">Confirmar compra</button>
          </form>
              
        </div>
      : 
        <div>
          <h2>No hay Instrumentos en el carrito</h2>
            <Link to={'/'}>
              <button className="btn btn-outline-secondary">Seguir comprando instrumentos</button>
            </Link>
        </div>}
      </>
    )
  }

export default CartContainer