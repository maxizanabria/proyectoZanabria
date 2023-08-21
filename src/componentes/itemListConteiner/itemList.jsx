
const ItemList = ({ producto }) => {
    return (
        <div>
            <h2>{producto.name}</h2>
            <p>Acción terapeutica: {producto.AccionTerapeutica}</p>
            <p>Precio: ${producto.precio}</p>
        </div>
    )
}

export default ItemList ; 