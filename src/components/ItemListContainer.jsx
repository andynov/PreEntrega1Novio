import { useEffect, useState } from "react";
import { mFetch } from "../data/mockFetch";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList/ItemList";



const ItemListContainer = () => {
  const [instrumentos, setInstrumentos] = useState({})
  const [loading, setLoading] = useState(true)
  const {cid} = useParams()

  useEffect(()=>{
    if(cid){
      mFetch()
      .then(respuesta => setInstrumentos(respuesta.filter(instrumento => cid === instrumento.categorys)))
      .catch(err => console.log(err))
      .finally(()=>setLoading(false))
    } else {

      mFetch()
      .then(respuesta => setInstrumentos(respuesta))
      .catch(err => console.log('Error en el servidor'))
      .finally(()=>setLoading(false))
    }
    }, [cid])

  return (
    <div className="row">
      {loading ? <h2>Loading...</h2> : <ItemList instrumentos={instrumentos} /> }
    </div>
  )
}


export default ItemListContainer
