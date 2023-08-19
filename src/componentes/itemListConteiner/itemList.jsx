
const itemList = ({ productos }) => {
    return (
        <div>
            <h1>Catalogo</h1>
            {
                productos.lenght > 0 && productos.map((productos) => {
                    return (
                        <item producto={producto}/>
                    )
                })
            }

             
        </div>
    )
}

export default itemList ; 