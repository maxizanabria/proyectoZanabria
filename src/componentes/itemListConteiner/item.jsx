const item = ({producto}) => {
    return (
        <div>
            <h2>{producto.name}</h2>
            <p>{producto.AccionTerapeutica}</p>
            <p>{producto.Laboratorio}</p>
            <p>{producto.Tipo}</p>
            <p>${producto.precio}</p>
        </div>
    )
};

export default item; 