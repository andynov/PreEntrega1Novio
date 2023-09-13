import { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = () => {
  const [instrumentos, setInstrumentos] = useState([])
  const [loading, setLoading] = useState(true)
  
  const mFetch = async () =>{
    try {
      const url = "./src/data/data.json"
      const instrumentosJson = await fetch(url)
      const instrumentos = await instrumentosJson.json()
      setInstrumentos(instrumentos)
    }
    catch(error) {
      console.log('error')
    }
    finally {
      setLoading(false)
    }
  }
  
  useEffect(()=>{
    mFetch()
  }, [])

  return (
    <div className="row">
      {loading ? <h2>Loading...</h2> : <ItemList instrumentos={instrumentos} /> }
    </div>
  )
}

export default ItemListContainer
