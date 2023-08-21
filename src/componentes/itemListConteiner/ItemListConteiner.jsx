import {useState, useEffect} from 'react';
import ItemList from './itemList';
import { useParams } from 'react-router-dom';
import { pedirProductos } from './pedirProductos';



 
const ItemlistConteiner = () => {

    const [productos, setItem] = useState([]);
    

    useEffect(() => {
        pedirProductos()
        .then((res) => {
            setItem(res); 
        })
    }, [])  

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