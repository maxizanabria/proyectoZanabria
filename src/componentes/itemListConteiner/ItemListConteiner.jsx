import {useState, useEffect} from 'react';
import ItemList from './itemList';
import { useParams } from 'react-router-dom';
import { pedirProductos } from './pedirProductos';



 
const ItemlistConteiner = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    console.log(categoria);
 

    useEffect(() => {
        pedirProductos()
        .then((res) => {
            if (categoria){
                setProductos(res.filter((prod) => productos.categoria === categoria) ); 
            } else {
                setProductos(res);
            }
           
        })
    }, [categoria])  

    return(
        <>
        <div>
            {productos.map((producto) => (
                <ItemList key={producto.id} producto={producto} />
            ))}
          
        </div>
        </>
    )
}



export default ItemlistConteiner;