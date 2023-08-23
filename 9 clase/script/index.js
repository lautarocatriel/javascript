//dom: el modelo de objetos del documento, es una estructura de objetos generada por el navegador, el navegador nos permite acceder a estos objetos a traves de document 
console.log(document)

console.log(document.body)

//podemos hacer uso de metodos, que se dan a partir de document, es decir, no podemos usarlos solos, para tener acceso especifico a un nodo o conjunto de nodos

//document.getElementById: me permite obtener un elemento por su ID
const container = document.getElementById("container")

console.log(container)

//document.getElementsByTagName: llama a todos los elementos que coincidan con el nombre etiqueta. no es un array, por lo tanto no pueden ser aplicados metodos de array

const contenedores = document.getElementsByTagName("div")

console.log(contenedores)

//recorrer un dom

for(let i = 0; i < contenedores.length; i++) {
    console.log(contenedores[i])
    contenedores[i].textContent= "agregando contenido"
}

contenedores[0].textContent = "nuevo contenido a un elemento"

//document.getElementsByClassName: llama a todos elemento que coincida con la clase, son una htmlcollection. tienen indice y lenght, se pueden recorrer con un for, llaman a los elementos con mas especificidad que el TagName

const contenedoresPorClase = document.getElementsByClassName("caja")
console.log(contenedoresPorClase)

//podemos llamar a los nodos por sus selectores, tenemos selectores de etiqueta, clase, identificador, etc.

//document.querySelector:le pasamos el nombre de la etiqueta, la clase con punto o el id con numeral. retorna el primer elemento que coincida, solo retorna un elemento.

//ejemplo de llamar a un elemento por su etiqueta

const main = document.querySelector("main")
console.log(main)

//ejemplo de llamar a un elemento por su clase

const cajaComentario = document.querySelector(".comentario")

console.log(cajaComentario)


//ejemplo de llamar a un elemento por id

const cajaID = document.querySelector("#cajaid")

console.log(cajaID)

//tambien podemos usar el plural y llamar a todos los elementos que coincidan con los selectores
//document.querySelectorAll
//es una nodelist

const todosLosDivs = document.querySelectorAll("div")

console.log(todosLosDivs)
//recorrer 
todosLosDivs.forEach( element => console.log(element))

//verificar el contenido de un ondo
const parrafo = document.querySelector("p")
console.log(parrafo.textContent)

//acceder al valor de su id

console.log(parrafo.id)

//acceder a su nombre de clase

console.log(parrafo.className)


//sobreescribir clase

parrafo.className = "nuevaclase"
console.log(parrafo)

//anadir nueva clase sin sobreescribir la anterior

parrafo.classList.add("agregaclass")


