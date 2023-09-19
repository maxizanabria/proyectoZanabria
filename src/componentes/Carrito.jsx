import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className='container'>
      <h2 className='main-tittle'> Mi compra </h2>

      {
        carrito.map((prod) => (
            <div key={prod.id}>
            <br />
            <h3>{prod.titulo}</h3>
            <img src={prod.imagen} alt={prod.titulo} />
            <br />
            <p>Precio Unit: ${prod.precio}</p>
            <p>Precio Total: ${prod.precio * prod.cantidad}</p>
            <p>Cant: {prod.cantidad }</p>
            <br />
            </div>
        ))
      }

      {
      carrito.length > 0 ?
      <>
      <h2>Precio total: ${precioTotal()}</h2>
      <button onClick={handleVaciar} className='buttonCart'> Vaciar Carrito </button>
      <button className='buttonCart' > Confirmar Compra </button>
      <button className='buttonCart'> <Link to="/productos" > Volver a la tienda  </Link></button>
      </> :
   
      <h2>No hay pedidos por el momento ! vuelve a la tienda </h2>
      
      
      
      }
    </div>
  )
}

export default Carrito
