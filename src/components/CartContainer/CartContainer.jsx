import { Link } from "react-router-dom"
import { addDoc, collection, doc, getFirestore, writeBatch} from 'firebase/firestore'
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

  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm, 
      [evt.target.name] : evt.target.value })
  }

  const [id, setId] = useState('')

  const {cartList, deleteCart, precioTotal, quantityTotal, deleteItem} = useCartContext()
  
  const handleAddOrder = async (evt) => {
    evt.preventDefault()
    if (dataForm.name !== '' && dataForm.email !== '' && dataForm.phone !== ''){
      const order = {}
      order.buyer = {name: dataForm.name, phone: dataForm.phone, email: dataForm.email}
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
      
      // actualizar un producto

      // const batch = writeBatch(queryDB)
      // const queryDBUpdate = doc(queryDB, 'instrumentos', instrumentos.id)
      // batch.update (queryDBUpdate.forEach(instrument => {
      // instrument.id === id ? instrument.stock = instrument.stock - cartList.quantity : instrument.stock 
      // }))
      // batch.commit()
      // })
    })

    .catch(err => console.log(err))
    }else{
      alert('Todos los campos deben ser completados')
    }
  }

  return (
    <>
      {id !== '' && <h2>Muchas gracias por su compra. Su orden es: {id}</h2>}
      {quantityTotal() ==! 0 ?
        <div>

          <ItemCart cartList={cartList} deleteItem={deleteItem}  />

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