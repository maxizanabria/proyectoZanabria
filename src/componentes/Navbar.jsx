import React from 'react'
import logo1 from "../assets/img/logo1.png"
import CarWidget from './carWidget/CarWidget'



const Navbar = () => {
  return (
    <>
    <div>
    <header>
          
          <li className='carrito'>
            
             <img className='logo1' src={logo1} alt="logo" />
            
            
            <ul>
              <button> Analgesicos </button> 
            </ul>
            <ul>
              <button> Antibioticos </button> 
            </ul>
            <ul>
              <button> Retrovirales </button> 
            </ul>
  
            <ul>
              <CarWidget/>
            </ul>
          </li>
        
          </header>
      
       
    </div>



    </>
  )
}

export default Navbar