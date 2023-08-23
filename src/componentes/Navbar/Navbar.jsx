import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
   <nav className='navbar'>
    <Link to="/" className='logo'><h1> Farmax </h1> </Link>
    <button><li><Link className="menu-link" to="/" > Nosotros</Link> </li></button>
    <button><li><Link className="menu-link" to="/productos" > Productos </Link></li></button>
    <button><li><Link className="menu-link" to="/productos/antibioticos" > Antibioticos </Link></li></button>
    <button><li><Link className="menu-link" to="/productos/antialergicos" > Antialergicos </Link></li></button>
    <button><li><Link className="menu-link" to="/productos/analgesicos" > Analgesicos </Link></li></button>
  
   </nav>
  )
}

export default Navbar
