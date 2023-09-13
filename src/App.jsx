import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} /> 
            <Route path='/detalle' element={<ItemDetailContainer />} /> 
          </Routes>
        </Router> 
      </div>
 )
}

export default App


