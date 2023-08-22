import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer'

import './App.css'



function App() {
  return (
    <>
      <div>
        <Navbar />
        <ItemListContainer />
      </div>
    </>
  )
}

export default App
