import { useCounter } from "../Hooks/useCounter"

const ItemCount = ( { inicial, stock, cantidad }) => {
    const {count, restar, sumar} = useCounter (inicial, stock)
    return <div>

            <button onClick={restar}> -1 </button>
            <strong> {count}</strong>
            <button onClick={sumar}> +1 </button>
            <button onClick={()=> cantidad(count)}> Agregar al Carrito </button>
    </div>
}

export default ItemCount