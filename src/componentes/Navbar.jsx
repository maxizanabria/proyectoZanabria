import React from 'react'
import logo1 from "../assets/img/logo1.png"
import CarWidget from './carWidget/CarWidget' 
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <>
    <div>
    <header>
   
          <li className='carrito'>
            
             <img className='logo1' src={logo1} alt="logo" />
            
            
            <ul><button><Link to="/productos" > Productos  </Link> </button> </ul> 
            <ul><button><Link to="/productos/Analgesicos" >Analgesicos  </Link></button> </ul> 
            <ul><button><Link to="/productos/Antibioticos" >Antibioticos </Link></button> </ul>
            <ul><button><Link to="/productos/Retrovirales" >Retrovirales  </Link></button> </ul> 
  
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