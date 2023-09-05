const productos = [
    {id: '1', nombre: "Vela amatista",precio: 1000, categoria: "Velas y sahumerios"},
    {id: '2', nombre: "Vela obsidiana",precio:2000, categoria: "Velas y sahumerios"},
    {id: '3', nombre: "Kit wiccat ",precio: 20000, categoria: "Kits"},
    {id: '4', nombre: "Cartas tarot",precio: 9000, categoria: "Cartas y accesorios"},
    {id: '5', nombre: "Sahumerios", precio: 1500 , categoria: "Velas y sahumerios"},
    {id: '6', nombre: "Piedra amatista", precio: 2400, categoria: "Piedras"},
    {id: '7', nombre: "Cuarzo Rosa ", precio: 2300, categoria: "Piedras"},
    {id: '8', nombre: "Obsidiana", precio: 1700, categoria: "Piedras"},
    {id: '9', nombre: "Pendulo de Bronze", precio: 4550, categoria: "Pendulos"},
    {id: '10', nombre: "Pulsera de cuarzo rosa", precio: 3450, categoria: "Cartas y accesorios"}
]

export const obtenerProduto = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find((prod) => prod.id === id)
            if(producto){
                resolve(producto)
            }else{
                reject("Todavia no tenemos ese producto")
            }
        }, 1000)
    })
}

export const obtenerProdutos = (categor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const productoFiltrado = categor ? productos.filter((el) => el.categoria === categor) : productos
            resolve(productoFiltrado)
        },1000)
    })
}
