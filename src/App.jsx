
import './App.css' ;
import Navbar from './componentes/Navbar';
import ItemlistConteiner from './componentes/itemListConteiner/ItemListConteiner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App() {

  return (
    
    <>
     <BrowserRouter>
    
    
      <Navbar/>

      <Routes>
        <Route path="/" element={<ItemlistConteiner/> } />
        <Route path="/productos/:categoria" element={<ItemlistConteiner/> } />
       

        
    
        



      </Routes>

     
        


   
    </BrowserRouter>
    
    </>
  )
}



export default App
