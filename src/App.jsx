import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CartContextProvider from './context/CartContext';
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
      <div>
        <Router>
          <CartContextProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} /> 
              <Route path='/category/:cid' element={<ItemListContainer />} /> 
              <Route path='/detalle/:iid' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartContainer />} />
            </Routes>
          </CartContextProvider>
        </Router> 
      </div>
 )
}

export default App


