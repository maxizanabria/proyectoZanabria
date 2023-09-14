import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget'


const Navbar = () => {
  return (
   <nav className='navbar'>
    <Link to="/" className='logo' ><h1> Farmax </h1> </Link>
    <button><li className='list'><Link className="menu-link" to="/nosotros" > Nosotros</Link> </li></button>
    <button><li className='list'><Link className="menu-link" to="/productos" > Productos </Link></li></button>
    <button><li className='list'><Link className="menu-link" to="/productos/antibioticos" > Antibioticos </Link></li></button>
    <button><li className='list'><Link className="menu-link" to="/productos/antialergicos" > Antialergicos </Link></li></button>
    <button><li className='list'><Link className="menu-link" to="/productos/analgesicos" > Analgesicos </Link></li></button>
    <button className='menu-link'><li><CartWidget/></li></button>
    
   </nav>
  )
}

export default Navbar
