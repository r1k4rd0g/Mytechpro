
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/navbar'
import { ItemListContainer } from './containers/itemListContainer/itemListContainer'
import { NotFound } from './components/statuspage/statusPages'
import { ItemDetail } from './containers/itemDetailContainer/itemDetailContainer'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> {/*el navbar queda fuera de routes, para que se vea en todas las secciones*/}
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenido' />}/>
          <Route exact path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetail/>}/>
          <Route path='*' element={<NotFound/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
