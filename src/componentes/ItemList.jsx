import Item from "./Item"

const ItemList = ( {productos} ) => {
  return (
    <div>
        <h2 className='detailProductos'>Eleji los MEJORES productos del mercado. FACIL, RAPIDO y con completa SEGURIDAD RECOMENDADA por la ANMAT</h2>
        <div className='productos'>
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
      
    </div>
  )
}


 
export default ItemList
