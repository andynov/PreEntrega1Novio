import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [instrument, setInstruments] = useState({})
  const {iid} = useParams()

  useEffect (() =>{
    const db = getFirestore()
    const queryDoc = doc(db, 'instrumentos', iid)
    getDoc(queryDoc)
    .then (resp => ({id: resp.id, ...resp.data()}))
    .then (resp => setInstruments(resp))
    .catch((err)=> console.log(err))
  }, [])

  return (
    <div>
    < ItemDetail instrument={instrument}  />
    </div>
  )
}

export default ItemDetailContainer


