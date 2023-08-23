// **Actividad 1: Ecommerce**

// 1. **Objetivo**: Comenzar a desarrollar un ecommerce que permita mostrar productos, agregarlos al carrito y guardar la selección en el almacenamiento local.

// 2. **Instrucciones**:

//    a. Abre un archivo HTML y crea un contenedor con el id "productos-container" donde se mostrarán las tarjetas de productos.

//    b. En un archivo JavaScript, crea un array de objetos con 10 productos.

//    c. Escribe una función llamada `generarTarjetas` que reciba el array de productos como argumento. Dentro de esta función, utiliza un reduce para crear elementos HTML para cada producto, estilízalos mínimamente y agrega un botón "Agregar al Carrito" que al hacer clic lo agregue al almacenamiento local.



const productos = [
    {
        id: 1,
        producto: "Tarjeta-Grafica",
        categoria: "Componentes",
        precio: 399.99,
        marca: "Nvidia",
        imagen: "./assets/images/nvidia.jpeg",
        descripcion: "Potente tarjeta gráfica para gaming de última generación.",
    },
    {
        id: 2,
        producto: "Monitor",
        categoria: "Periféricos",
        precio: 249.99,
        marca: "Dell",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_852766-MLA70479823708_072023-F.webp",
        descripcion: "Monitor de alta resolución y excelente calidad de color.",
    },
    {
        id: 3,
        producto: "SSD",
        categoria: "Almacenamiento",
        precio: 89.99,
        marca: "Samsung",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_881660-MLA45131832295_032021-F.webp",
        descripcion: "Unidad de estado sólido de gran capacidad y velocidad.",
    },
    {
        id: 4,
        producto: "Teclado-Mecánico",
        categoria: "Periféricos",
        precio: 129.99,
        marca: "Corsair",
        imagen: null,
        descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
    },
    {
        id: 5,
        producto: "Procesador",
        categoria: "Componentes",
        precio: 299.99,
        marca: "Intel",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_942817-MLA40220220255_122019-F.webp",
        descripcion: null,
    },
    {
        id: 6,
        producto: "Mouse-Inalámbrico",
        categoria: "Periféricos",
        precio: 39.99,
        marca: "Logitech",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_918568-MLA32146214305_092019-F.webp",
        descripcion: "Mouse ergonómico inalámbrico con precisión óptica.",
    },
    {
        id: 7,
        producto: "Memoria-RAM",
        categoria: "Componentes",
        precio: 79.99,
        marca: "Crucial",
        imagen: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/CB8GU2666_800.jpg",
        descripcion: "Módulo de memoria RAM de alta velocidad para mejorar el rendimiento.",
    },
    {
        id: 8,
        producto: "Disco-Duro-Externo",
        categoria: "Almacenamiento",
        precio: 119.99,
        marca: "Western Digital",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_806884-MLA47690902400_092021-F.webp",
        descripcion: "Disco duro externo de gran capacidad para almacenar tus archivos.",
    },
    {
        id: 9,
        producto: "Fuente-de-Alimentación",
        categoria: "Componentes",
        precio: 89.99,
        marca: "EVGA",
        imagen: null,
        descripcion: "Fuente de alimentación eficiente y de alta potencia.",
    },
    {
        id: 10,
        producto: "Auriculares-Gaming",
        categoria: "Audio",
        precio: 69.99,
        marca: "Razer",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_650755-MLA40807371233_022020-F.webp",
        descripcion: "Auriculares gaming con sonido envolvente y micrófono retráctil.",
    },
];
console.log(productos)
const table = document.querySelector("#productos-container")
const generarTarjetas = array => {
    const data = array.reduce(( acc, element) => {
        return acc + `
            <tr class="${element.producto}">
                <td class="table__titulo">
                    ${element.producto || "none"} 
                </td>
                <td class="table__precio">
                    ${element.precio || "none"}
                </td>
                <td class="table__marca">
                ${element.marca || "none"}
                </td>
                <td class="table__img">
                    <img src="${element.imagen || "assets/images/not-found.jpg"}" alt="${element.producto}">
                </td>
                <td class="table__descripcion">
                ${element.descripcion || "none"}
                </td>
                <td class="table__button">
                <button  id="button-${element.id}">
                agregar al carrito
                </button>   
                </td>
            </tr>
        `        
    }, "",
    )
table.innerHTML = data 
}
generarTarjetas(productos)
 

const botones = document.querySelectorAll("button");

let productosAgregados = []

const eventoProductos = ( nodos, array ) => {

    for ( let i = 0; i < nodos.length; i++ ) {

        nodos[i].onclick = (e) => {                               
            const id = e.currentTarget.id.slice(7)
            const buscarProducto = array.find( element => element.id === Number(id))
            productosAgregados.push(buscarProducto)
            localStorage.setItem("productos", JSON.stringify(productosAgregados))
    
        }
    }
}

eventoProductos(botones, productos)