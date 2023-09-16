import React from 'react'
import { Link } from 'react-router-dom'

function Item({ producto }) {
    return (
        <div className='producto'>
            <img src={producto.imagen} alt={producto.titulo} />
            <h3>{producto.titulo}</h3>
            <p>Precio: ${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <Link className='ver-mas' to={`/item/${producto.id}`}> Ver medicamento </Link>

        </div>
    )
}

export default Item
