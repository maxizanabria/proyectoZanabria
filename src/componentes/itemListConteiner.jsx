import React from 'react'




const ItemlistConteiner = ({nombre, precio, descripcion}) => {

    
    

    return(
        <>
        <div>
            <h3>Nombre: {nombre} </h3>
            <p>Precio: {precio} </p>
            <p>Descripcion: {descripcion} </p>
            <hr />
        </div>

        </>
    )
}



export default ItemlistConteiner