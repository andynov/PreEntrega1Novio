import { useState } from "react"

import './ItemCount.css'

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
            <button className="btn btn-secondary" onClick={add}> +1 </button>
            <strong> {counter}</strong>
            <button className="btn btn-secondary" onClick={subtract}> -1 </button>
            <button className="btn btn-secondary" onClick={addChart}> Add to Cart </button>
    </div>
}

export default ItemCount