import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

const Loading = () => {
  return (
    <>
      <h2>Loading...</h2>
    </>
  )
}


const ItemListContainer = () => {
  const [instrumentos, setInstruments] = useState({})
  const [loading, setLoading] = useState(true)
  const {cid} = useParams()

useEffect(()=>{  
  const db = getFirestore()
  const queryCollection = collection(db, 'instrumentos') 
  const queryFilter = cid ? query(queryCollection, where('category', '==', cid)) : queryCollection
  getDocs(queryFilter)
  .then (resp => setInstruments(resp.docs.map(instr => ({id: instr.id, ...instr.data()}))))
  .catch(err => console.log('Error en el servidor'))
  .finally(()=>setLoading(false))
  }, [cid])

  return (
    <div className="row">
      {loading ? <Loading /> : <ItemList instrumentos={instrumentos} /> }
    </div>
  )
}


export default ItemListContainer
