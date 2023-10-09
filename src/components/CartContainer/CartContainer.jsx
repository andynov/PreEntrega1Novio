import { Link } from "react-router-dom"
import { addDoc, collection, doc, getFirestore, writeBatch, getDoc} from 'firebase/firestore'
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
      try {
        const orderDocRef = await addDoc(orderCollection, order);
        const batch = writeBatch(queryDB);

        // Itera sobre el carrito y actualiza el stock de cada producto
        await Promise.all(
        cartList.map(async (cartItem) => {
          const productId = cartItem.id;
          const quantity = cartItem.quantity;
          const productRef = doc(queryDB, 'instrumentos', productId);
          const productDoc = await getDoc(productRef);
    
          if (productDoc.exists()) {
            const currentStock = productDoc.data().stock;
            const newStock = currentStock - quantity;
        // Actualiza el stock del producto en el lote (batch)
            batch.update(productRef, { stock: newStock });
            }
          })
        );
  
        // Ejecuta el lote para actualizar los productos en Firestore
        await batch.commit();
        setId(orderDocRef.id)
        deleteCart()
      } catch (error) {
        console.error('Error al agregar la orden o actualizar el stock', error);
      }
    } else {
      alert('Todos los campos deben ser completados');
    }
  };


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