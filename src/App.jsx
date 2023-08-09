
import './App.css' ;
import Navbar from './componentes/Navbar';
import ItemlistConteiner from './componentes/itemListConteiner';



function App() {

  return (
    
    <>
    <Navbar/>
    <ItemlistConteiner nombre="Diclofenac 75mg x 30comp" precio={2500} descripcion="Analgesico/Antiinflamatorio"/>
    <ItemlistConteiner nombre="Amoxicilina 1g x 16comp" precio={3640} descripcion="Antibiotico"/>
    
    
    </>
  )
}



export default App
