import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

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


