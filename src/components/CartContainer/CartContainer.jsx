import { Link } from "react-router-dom"
import { addDoc, collection, doc, getFirestore, writeBatch, getDoc} from 'firebase/firestore'
import { useState } from "react"

import { useCartContext } from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import FormCart from "../FormCart/FormCart"

import './CartContainer.css';

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
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your order has been completed",
        showConfirmButton: false,
        timer: 1500
      });

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
        console.error('Error adding the order or updating stock', error);
      }
    } else {
      Swal.fire({
        icon: "warning",
        text: "Please, complete all fields",

      });
    }
  };


  return (
    <>
      {id !== '' && <div className="order-completed">
                      <h2>Thank you for your purchase.</h2>
                      <h3>Your order number is: {id}</h3>
                    </div>
      }
      {quantityTotal() !== 0 ?
        <div className="item-cart-container">

          <ItemCart cartList={cartList} deleteItem={deleteItem}  />

          <p className="total-prize">Total: USD <strong>${precioTotal()}</strong></p>
          
          <button className="delete-cart btn btn-outline-danger" onClick={deleteCart}>Delete Cart</button>

          <FormCart handleAddOrder={handleAddOrder} dataForm={dataForm} handleOnChange={handleOnChange} />

        </div>
      : 
        <div className="empty-container">
          <h2 className="empty-text">The cart is empty</h2>
            <Link to={'/'}>
              <button className="btn btn-outline-secondary empty-btn">Continue buying</button>
            </Link>
        </div>}
    </>
  )
}

export default CartContainer