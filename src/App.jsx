import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const cantidad = (count) => {
    console.log(count)
  } 
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer />
        <ItemDetailContainer />
      </div>
    </>
  )
}

export default App

// <ItemCount inicial={1} stock={4} cantidad={cantidad}  />
