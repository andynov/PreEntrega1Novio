import { useState } from "react"

export const useCounter = (min, max) =>{
    const [count, setCount] = useState(min)

    const sumar = () => {
        if (count < max){
        setCount(count + 1)
        }
    }

    const restar = () => {
    if (count > min) {
        setCount(count - 1)
    }
    }
    
    return {count, sumar, restar}
}