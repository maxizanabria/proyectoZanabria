import React, { useEffect, useState } from 'react'
import { pedirItemPorId } from './helpers/pedirProductos';
import ItemDetail from './ItemDetail';

const itemDetailContainer = ({itemId}) => {

    const [item, setItem ] = useState(null);
    
    
    useEffect (() => {
        pedirItemPorId(itemId)
        .then((res) => {
            setItem(res);
        })
    }, [])

  return (
    <div>
      {item && <ItemDetail item={item}/>}
    </div>
  )
}

export default itemDetailContainer
