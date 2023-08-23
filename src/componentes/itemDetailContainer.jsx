import React, { useEffect, useState } from 'react'
import { pedirItemPorId } from './helpers/pedirProductos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const itemDetailContainer = () => {

    const [item, setItem ] = useState(null);
    const id = useParams().id;

    
    
    useEffect (() => {
        pedirItemPorId(Number(id))
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
