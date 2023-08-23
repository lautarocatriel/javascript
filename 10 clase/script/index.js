//a traves de la palabra reservada document, podemos acceder al arbol de nodos (dom) 

//almaceno en una variable el nodo relativo a un boton

const buttonClick = document.querySelector("#click-boton")


//cuando queremos escuchar determianda accion sobre nuestra pagina, debemos hacer uso de los eventos. los eventos no son otra cosa que la escucha de algo que sucedio y en consecuencia la ejecucion de un "manipulador" (que es una funcion - callback -), que genera un respuesta ante la ejecucion de este evento

//addEventlistener = anadir escucha de un evento
//recibe dos argumentos: es el tipo de escucha, ahora vamos a usar click
//es el callback (manipulador) que se ejecutara

buttonClick.addEventListener("click", () =>{
    console.log("me hacen click")
})

//.style.backgroundColor = ""

const caja = document.querySelector(".caja")
buttonClick.addEventListener("click", () => {
    caja.style.backgroundColor = "blue"
})


//toggle para modificar elementos a traves de clases

caja.addEventListener("click", () =>{
    caja.classList.toggle("caja-verde")
})

//mouseover: escucha cuando el puntero entra dentro de la caja

document.querySelector(".otra-caja-roja").onmouseover = () =>{
    console.log("esta dentro de la caja")
}


//mousedown: escucha todos los click que se produzcan sobre el elemento
//si le paso el parametro event a un callback manipulador de eventos, me pasa informacion sobre el evento desencadenado

document.querySelector(".otra-caja-rosa").onmousedown = (event) => {
    console.log("me hacen click")
    console.log(event)//proporciona info del evento
    console.log (event.target) //me dice quien dispara el evento
}


//los form tienen eventos de escucha que son especificos y particulares de sus campos

const inputNombre = document.querySelector("#input-nombre")

const inputApellido = document.querySelector("#input-apellido")

//el evento oninput escucha cada una de las interacciones que se escribe sobre el input
inputNombre.oninput = () => {
console.log(inputNombre.value) //muestra el valor que se genero dentro del campo
document.querySelector("p").textContent = inputNombre.value
}

//el evento onchange escucha cuadno se realiza el cambio del valor de un input, al salir del campo

inputApellido.onchange = (e) => {
    //console.log(inputApellido.value)
    console.log(e.target.value)
}

//submit --> evento que se encarga de enviar el formulario

//document.querySelector("form").addEventListener("submit", () => {})

let clientes = []

document.querySelector("form").onsubmit = (event) => {
event.preventDefault()

console.log("formulario enviado")

clientes.push({
    nombre: inputNombre.value,
    apellido: inputApellido.value
})
document.querySelector("form").reset()//guarda todos los valores que esten dentro del campo

console.log(clientes)

}

//clientes.map((elemento) => console.log(elemento.nombre))



