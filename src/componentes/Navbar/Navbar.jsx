import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget'
import logofarmax from '../imagenes/logo.png'

const Navbar = () => {
  return (
   <nav className='navbar'>

    <li className='logo' href="/">
      <img src={logofarmax} alt="logo" />
    </li>
    <li className='list'><Link className="menu-link" to="/Contacto" > Contacto </Link> </li>
    <li className='list'><Link className="menu-link" to="/productos" > Productos </Link></li>
    <li className='list'><Link className="menu-link" to="/productos/antibioticos" > Antibioticos </Link></li>
    <li className='list'><Link className="menu-link" to="/productos/antialergicos" > Antialergicos </Link></li>
    <li className='list'><Link className="menu-link" to="/productos/analgesicos" > Analgesicos </Link></li>
    <li><CartWidget/></li>
    
   </nav>
  )
}

export default Navbar
