import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className='container'>
      <h1 className='main-tittle'> Carrito </h1>

      {
        carrito.map((prod) => (
            <div key={prod.id}>
            <br />
            <h3>{prod.titulo}</h3>
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
      <button onClick={handleVaciar}>Vaciar carrito </button>
      </> :
      <h2>El carrito esta vacio !</h2>
      }
    </div>
  )
}

export default Carrito
