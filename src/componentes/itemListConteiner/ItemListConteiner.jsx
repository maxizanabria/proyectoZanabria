import {useState, useEffect} from 'react';
import pedirProductos from './pedirPorductos';
import ItemList from './itemList';


 
const ItemlistConteiner = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirProductos()
        .then((res) => {
            setProductos(res);
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