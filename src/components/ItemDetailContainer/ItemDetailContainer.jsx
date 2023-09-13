import { useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { mFetch } from '../../data/mockFetch'

const ItemDetailContainer = () => {
  const {instrumento, setInstrumentos} = useState({})


  useEffect(()=> {
    mFetch(iid)
    .then(resp => setInstrumentos(resp))
    .catch((err)=> console.log(err))
    .finally(setLoading)
  }, [])

  return (
    <div>
    < ItemDetail instrumento={instrumento}  />
    </div>
  )
}

export default ItemDetailContainer


