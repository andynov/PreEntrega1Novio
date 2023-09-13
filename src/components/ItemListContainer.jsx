import { useEffect, useState } from "react";
import { mFetch } from "../data/mockFetch";

import ItemList from "./ItemList/ItemList";


const ItemListContainer = () => {
  const [instrumentos, setInstrumentos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    mFetch()
    .then(respuesta => setInstrumentos(respuesta))
    .catch(err => console.log('Error en el servidor'))
    .finally(()=>setLoading(false))
  }, [])

  return (
    <div className="row">
      {loading ? <h2>Loading...</h2> : <ItemList instrumentos={instrumentos} /> }
    </div>
  )
}

export default ItemListContainer
