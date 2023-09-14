import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const addInstrumento = (newInstrumento) => {
        setCartList([
            ...cartList, 
            newInstrumento
        ])
    }

  return (
    <CartContext.Provider value={{
        cartList,
        addInstrumento
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider