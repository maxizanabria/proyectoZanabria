
import { pedirProductos } from "./helpers/pedirProductos";
import { useEffect, useState } from "react";
import ItemList from './ItemList'


const ItemListConteiner = () => { 

    const [productos, setProductos] = useState([]);

    useEffect (() => {
        pedirProductos()
        .then((res) => {
            setProductos(res);
            
        })
    })
    
  return (
    <div>
      <ItemList productos={productos}/> 
    </div>
  )
}

export default ItemListConteiner
