import React from 'react'
import { Link } from 'react-router-dom'

function Item({ producto }) {
    return (
        <div>
            <h3>{producto.titulo}</h3>
            <p>Precio: ${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>{producto.descripcion}</p>
            <Link className='ver-mas' to={`/item/${producto.id}`}> Ver detalle </Link>

        </div>
    )
}

export default Item
