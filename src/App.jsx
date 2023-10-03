import './App.css';
import ItemListConteiner from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/itemDetailContainer';
import { CartProvider } from './Context/CartContext';
import Carrito from './componentes/Carrito';
import Nosotros from './componentes/Nosotros';








function App() {



  return (

    <>
      <div>

        <CartProvider>
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<Nosotros />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/productos" element={<ItemListConteiner />} />
              <Route path="/productos/:categoria" element={<ItemListConteiner />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/carrito" element={<Carrito />} />

              
            </Routes>

          </BrowserRouter>
        </CartProvider>

      </div>

    </>
  )
}


export default App
