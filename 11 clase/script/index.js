//aplication --> cookies

//el objet storage nos facilita la posibilidad de almacenar de manera local dato o preferencias del usuario

//local storage: prevalece en el tiempo

//session storage: es dinamico, al cerrar la pestana o navegador se pierde la info

//para incorporar una clave/valor en el localStorage, tengo que hacer uso de setItem

localStorage.setItem("nombreDeLaClave(modoOscuro)", "valor de la clave (si)")

//ejemplo de suba de clave/valor a traves de un evento (de esta forma se sube la clave/valor, a taves de una accion)

document.querySelector("button").onclick = () => {
    localStorage.setItem("nombreDeLaClave(modoOscuro)", "valor de la clave (si)")
}

//como obtener datos del localStorage: getItem
//los valores obtenidos deben ser alojados en una variable para poder ser utilizados. cuando obtenemos un clave/valor, siempre obetenemos realmente el valor, ya que la clave es como un identificador
//es necesario recordar que todo dato que se obtenga del storage, siempre es un string

localStorage.getItem("nombreDeLaClave(modoOscuro)")

const modoOscuro = localStorage.getItem("nombreDeLaClave(modoOscuro)")


const validarModoOscuro = modo => {
    if (modo === "valor de la clave (si)"){
        alert("eligio modo oescuro")
    }
}

validarModoOscuro(modoOscuro)

//si la clave no existe ni representa nada, el getItem devuelve null


//sessionstorage
//este almacenamiento es temporal, su temporalidad esta definida por el cierre de la pestana o del navegador, al cerrarse deja de existir la clave

//anadir un dato al sessionStorage

sessionStorage.setItem("cliente", "1")

//funcion que permite subir elemento al sessionStorage

const subirAlSessionStorage = (clave, valor) => sessionStorage.setItem(clave, valor)


//ejemplo de ID del usuario

const validarUsuario = prompt("diga su nombre")

const validarPersona = persona => {
    if (persona === "lautaro"){
        subirAlSessionStorage("usuario", "l-1")
    } else if(persona === "juan"){
        subirAlSessionStorage("usuario", "j-2")
    }else if (persona === "carlos"){
        subirAlSessionStorage("usuario", "c-3")
    }
}
validarPersona(validarUsuario)
///////////////////////////////////////////

//como remover una clave/valor del localStorage y sessionStorage


localStorage.removeItem("chisitos")

sessionStorage.removeItem("papafritas")

//quiero borrar todas las claves del local o session

localStorage.clear()

sessionStorage.clear()

//supongamos que quiero trabajar con array de objetos

const carrito = [
    {
        id:23432,
        nombre:"caramlos",
        precio:500
    },
    {
        id:234212,
        nombre:"caras",
        precio:5003
    },
    {
        id:432,
        nombre:"cacaos",
        precio:50
    },

]

//si intento subir un dato complejo, como una array de objetos, al recibir string el storage, lo transforma y corrompe

localStorage.setItem("carrito", carrito)

//para esto usamos JSON
//cuando usamos el metodo stringify volvemos a los datos cadenas de caracteres(strings)
//al modificarlos, podemos subirlos al localStorage y preservar su forma 
const carritoAJSON = JSON.stringify(carrito)

console.log(carrito)

localStorage.setItem("carrito", carritoAJSON)


//al obtener los datos, van a seguir siendo JSON (strings)
//para poder operar con los datos extraidos del storage, debemos parsearlos con el metodo JSON.parse

const productosDelCarrito = localStorage.getItem("carrito")

const productosParseados = JSON.parse(productosDelCarrito)

console.log(productosParseados)

//ejemplo de lista de tareas que actualiza el localStorage

let tareas = []
const inputNombreTarea = document.querySelector("#input-nombre")
const inputTarea = document.querySelector("#input-tarea")

document.querySelector("form").addEventListener("submit", (event) =>{
    
    //prevenimos la actulizacion del sitio//crucial
    event.preventDefault()
//pusheamos le nuevo dato al array
    tareas.push({
        nombreTarea: inputNombreTarea.value,
        tarea: inputTarea.value
    })
    //limpiamos el formulario
    document.querySelector("form").reset()
    console.log(tareas)


//subimos al localStorage para preservar los datos de las tareas


localStorage.setItem("tareas" ,JSON.stringify(tareas))
})



