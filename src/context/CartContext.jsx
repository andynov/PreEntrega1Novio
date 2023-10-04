import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const addInstrument = (newInstrument) => {
        const index = cartList.findIndex(instrument => instrument.id === newInstrument.id)
        if (index !== -1){
            cartList[index].quantity += newInstrument.quantity
            setCartList( [...cartList])
        } else {
            setCartList([...cartList, newInstrument])
        }


    }

    const deleteCart = () =>{
        setCartList([])
    }

    const quantityTotal = () => cartList.reduce (( count, objInstrument) => count += objInstrument.quantity, 0)

    const precioTotal = () => cartList.reduce (( count, objInstrument) => count += objInstrument.quantity * objInstrument.precio, 0)

    const deleteItem = id => setCartList(cartList.filter(instrument => instrument.id !== id))

    return (
        <CartContext.Provider value={{
            cartList,
            addInstrument,
            deleteCart,
            quantityTotal,
            precioTotal,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider