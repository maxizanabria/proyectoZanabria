import data from "./data/productos.sjon";

const pedirProductos = () => {
    return new Promise ((resolve, rejected) => {
        resolve (data)
    })
}

export default pedirProductos;
