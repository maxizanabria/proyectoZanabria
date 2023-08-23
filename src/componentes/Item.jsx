import React from 'react'

function Item({ producto }) {
    return (
        <div>
            <h3>{producto.titulo}</h3>
            <p>Precio: ${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>{producto.descripcion}</p>
            <a className="ver-mas" href={`/item/${producto.id}`}>Ver detalle</a>

        </div>
    )
}

export default Item
