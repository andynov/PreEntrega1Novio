import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from './ItemDetail/ItemDetail'
import { mFetch } from '../../data/mockFetch'


const ItemDetailContainer = () => {
  const [instrumento, setInstrumentos] = useState({})
  const {iid} = useParams()


  useEffect(()=> {
    mFetch(Number(iid))
    .then(resp => setInstrumentos(resp))
    .catch((err)=> console.log(err))
    //.finally(setLoading)
  }, [])

  return (
    <div>
    < ItemDetail instrumento={instrumento}  />
    </div>
  )
}

export default ItemDetailContainer


