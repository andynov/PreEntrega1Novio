import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { mFetch } from '../../data/mockFetch'

const ItemDetailContainer = () => {
  const [instrumento, setInstrumento] = useState({})

  useEffect(()=> {
    mFetch(5)
    .then(resp => setInstrumento(resp))
    .catch((err)=> console.log(err))
    // .finally(setLoading)
  }, [])

  return (
    <div>
    < ItemDetail instrumento={instrumento} />
    </div>
  )
}

export default ItemDetailContainer
