//import { useState } from 'react'

import './App.css'
import { Navbar } from './components/navbar/navbar'
import { ItemListContainer } from './containers/itemListContainer/itemListContainer'

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting='Bienvenido' />
    </div>
  )
}

export default App
