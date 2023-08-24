import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div>
        <NavBar />
        <ItemListContainer greeting={"Te damos la bienvenida a la página, un gran saludo"} />
      </div>
    </>
  )
}

export default App
