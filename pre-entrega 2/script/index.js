
// PARA APROBAR, DEBEMOS HACER USO DE: ARRAYS, OBJETOS, FUNCIONES, MÉTODOS DE ARRAYS DE ITERACIÓN O MÉTODOS DE ARRAYS COMO PUSH, SPLICE, ETC, LOS QUE QUIERAN USAR
// TIENEN QUE INTERACTUAR CON EL USUARIO A TRAVÉS DE PROMPT
// PUEDEN DEVOLVER LA RESPUESTA AL USUARIO CON UN ALERT O CONSOLE.LOG
// TODOS LOS PUNTOS TIENEN QUE TRABAJAR CON ARRAYS DE OBJETOS
// SE DEBEN INSTANCIAR NUEVOS OBJETOS Y ESTOS DEBEN SER PUSHEADOS A UN ARRAY VACÍO

// CASO ECOMMERCE
// Generen con un función constructora o class constructor 5 objeto relativos a productos.
// Este objeto tiene uqe tener los siguientes propiedades:
// - nombre, precio, cantidad, categoria, id.
// Estos objetos deben ser pusheados a un array vacío que se llame productos
// al tener la data de nuestros productos, se debe hacer uso de un método de array que ordene a los elementos por su nombre (sort).
// luego debemos mandar un prompt, que se aloje en una variable, que le pregunte al usuario qué quiere comprar.
// debemos usar un método de array que busque a ese elemento, que tome su valor de nombre y precio y que mande un alerta al usuario, diciéndole que el producto ya está preparado para ir a su domicilio, que salio x dinero y agradecer por su combra.


function ProductosData (nombre, precio, cantidad, categoria, id){
    this.nombreProducto = nombre
    this.precioProducto = precio
    this.cantidadProducto = cantidad
    this.categoriaProducto = categoria
    this.IdProducto = id
}

const productos = []

productos.push(new ProductosData("tijeras", "$250", 1, "libreria", 0))
productos.push(new ProductosData("chicles", "$50", 5, "kiosco", 1))
productos.push(new ProductosData("caramelos", "$20", 10, "kiosco", 2))
productos.push(new ProductosData("cuadernos", "$500", 1, "libreria", 3))
productos.push(new ProductosData("folios", "$350", 10, "libreria", 4))

const productosOrdenados = productos.slice().sort((a, b) => {
    if (a.nombreProducto < b.nombreProducto){
        return -1
    } else if (a.nombreProducto > b.nombreProducto) {
        return 1
    } else {
        return 0
    }

})

console.log(productosOrdenados)

const venta = prompt("¿qué desea comprar?")

const ventaRealizada = productos.find((element) =>{
    return element.nombreProducto === venta
 })

alert(`${ventaRealizada.nombreProducto} tiene un valor de ${ventaRealizada.precioProducto}, su compra se encuentra en preparacion, pronto arribara a su domicilio. Muchas gracias por su compra!`)

