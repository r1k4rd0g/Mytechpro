
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/navbar'
import { ItemListContainer } from './containers/itemListContainer/itemListContainer'
import { NotFound } from './components/statusPages/statusPages'
import { ItemDetail } from './containers/itemDetailContainer/itemDetailContainer'
import { CartProvider } from './context/cartContext'
import { CartView } from './components/cartView/cartView'


function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar /> {/*el navbar queda fuera de routes, para que se vea en todas las secciones*/}
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetail />} />
            <Route path='/cart' element={<CartView/>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div >
  )
}

export default App
