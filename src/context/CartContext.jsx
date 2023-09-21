import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const addInstrumento = (newInstrumento) => {
        const index = cartList.findIndex(instrumento => instrumento.id === newInstrumento.id)
        if (index !== -1){
            cartList[index].quantity += newInstrumento.quantity
            setCartList( [...cartList])
        } else {
            setCartList([...cartList, newInstrumento])
        }


    }

    const deleteCart = () =>{
        setCartList([])
    }

    const cantidadTotal = () => cartList.reduce (( count, objInstrumento) => count += objInstrumento.quantity, 0)

    const precioTotal = () => cartList.reduce (( count, objInstrumento) => count += objInstrumento.quantity * objInstrumento.precio, 0)

    const eliminarItem = id => setCartList(cartList.filter(instrumento => instrumento.id !== id))

    return (
        <CartContext.Provider value={{
            cartList,
            addInstrumento,
            deleteCart,
            cantidadTotal,
            precioTotal,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider