import { useState } from "react"

const ItemCount = ( { inicial, stock, cantidad }) => {
    const [counter, setCounter] = useState(inicial)
    
    const sumar = ()=>{
        if(counter < stock) {
            setCounter(counter + 1)
        }
    }

    const restar = ()=>{
        if (counter > inicial){
            setCounter(counter - 1)
        }
    }

    const agregar = ()=>{
        cantidad(counter)
    }

    return <div>
            <button onClick={restar}> -1 </button>
            <strong> {counter}</strong>
            <button onClick={sumar}> +1 </button>
            <button onClick={agregar}> Agregar al Carrito </button>
    </div>
}

export default ItemCount