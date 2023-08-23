

const ItemDetail = ({item}) => {
  return (
    <div className="container">
        <div className="producto-detalle">
            <div>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">Categoria: {item.categoria}</p>
                <p className="precio">${item.precio}</p>
            </div>

        </div>

    </div>
  )
}

export default ItemDetail