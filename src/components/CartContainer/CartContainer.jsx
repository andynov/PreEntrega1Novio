import { Link } from "react-router-dom"
import { addDoc, collection, doc, getFirestore, writeBatch } from 'firebase/firestore'
import { useState } from "react"

import { useCartContext } from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import FormCart from "../FormCart/FormCart"

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

          <ItemCart cartList={cartList}  />

          <p>Precio Total: <strong>${precioTotal()}</strong></p>
          
          <button onClick={deleteCart}>Vaciar Carrito</button>

          <FormCart handleAddOrder={handleAddOrder} dataForm={dataForm} handleOnChange={handleOnChange} />

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