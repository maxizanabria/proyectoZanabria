
import './App.css' ;
import ItemListConteiner from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar'; 
import Nosotros from './componentes/Nosotros';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/itemDetailContainer';








function App() {

  return (
    
    <>
    <div>
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<ItemListConteiner/>} />
          <Route path="/item/:id" element={<ItemDetailContainer /> } />
          <Route path="/productos" element={<ItemListConteiner/>} />
          <Route path="/productos/:categoria" element={<ItemListConteiner/> } />
          <Route path="/nosotros" element={<Nosotros /> } />

        </Routes>
       
      </BrowserRouter>  

    </div>

    </>
  )
}



export default App
