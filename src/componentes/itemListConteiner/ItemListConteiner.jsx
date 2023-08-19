import {useState, useEffect} from 'react';
import pedirProductos from './pedirProductos.js';
import itemList from './itemList.';


 
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
            <itemList productos={productos}/>
         
        </div>

        </>
    )
}



export default ItemlistConteiner;