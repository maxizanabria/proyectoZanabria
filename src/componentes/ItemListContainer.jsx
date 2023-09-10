
import { pedirProductos } from "./helpers/pedirProductos";
import { useEffect, useState } from "react";
import ItemList from './ItemList'
import { useParams } from "react-router-dom";


const ItemListConteiner = () => { 

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;

    useEffect (() => {
        pedirProductos()
        .then((res) => {
          if (categoria) {
            setProductos(res.filter((prod) => prod.categoria === categoria));
          } else{
            setProductos(res);
          }
            
            
        })
    } ,  ) 
    
  return (
    <div>
      <ItemList productos={productos}/> 
    </div>
  )
}

export default ItemListConteiner
