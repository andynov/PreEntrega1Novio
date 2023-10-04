import Item from "../Item/Item"

const ItemList = ({instrumentos}) => {
  return (
    <>
    { instrumentos.map(instrument => <Item key={instrument.id} instrument={instrument} />) }
    </>
  )
}

export default ItemList