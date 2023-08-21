


const ItemList = ({ producto }) => {
    return (
        <div className='cards'>
            <h2>{producto.name}</h2>
            <p>Categoria: {producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Laboratorio: {producto.Laboratorio}</p>
            <p>Tipo: {producto.Tipo}</p>
            <img src="" alt="" />
            <button> Ver producto  </button> 
            
            
        </div>
    )
}

export default ItemList ; 