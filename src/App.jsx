
import './App.css' ;
import ItemListConteiner from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar'; 
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/itemDetailContainer';







function App() {

  return (
    
    <>
    <Navbar/>
    <ItemListConteiner/>
    <ItemDetailContainer itemId={2}/>

    </>
  )
}



export default App
