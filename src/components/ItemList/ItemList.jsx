import Item from "../Item/Item"

const ItemList = ({instrumentos}) => {
  return (
    <>
    { instrumentos.map(instrumento => <Item key={instrumento.id} instrumento={instrumento} />) }
    </>
  )
}

export default ItemList