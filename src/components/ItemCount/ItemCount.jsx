import { useState } from "react"

const ItemCount = ( { initial, stock, quantity }) => {
    const [counter, setCounter] = useState(initial)
    
    const add = ()=>{
        if(counter < stock) {
            setCounter(counter + 1)
        }
    }

    const subtract = ()=>{
        if (counter > initial){
            setCounter(counter - 1)
        }
    }

    const addChart = ()=>{
        quantity(counter)
    }

    return <div>
            <button onClick={subtract}> -1 </button>
            <strong> {counter}</strong>
            <button onClick={add}> +1 </button>
            <button onClick={addChart}> Agregar al Carrito </button>
    </div>
}

export default ItemCount