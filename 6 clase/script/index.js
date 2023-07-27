//arrays: lista de datos, se definen por []
//el array se caracteriza por tener un indice, este arranca en 0

const listaEstudiantes = ["a", "b", "c", "d"]
console.log(listaEstudiantes)

//para acceder a un valor tengo que llamar al indice dentro de []

console.log(listaEstudiantes[2])


//con un bucle, puedo recorrer un array y acceder a cada uno de sus valores

const vocales = ["a", "e", "i", "o", "u"]

for(let i = 0; i < vocales.length; i++) {
    console.log(vocales[i])
}

//metodos de arrays

//para aniadir un elemento nuevo al array, puedo usar push
const frutas = ["banana", "anana", "manzana", "naranja"]
console.log(frutas)

frutas.push("kiwi")
console.log(frutas)

//podemos aniadir elementos al principio del array con unshift

frutas.unshift("pera")
console.log(frutas)

//podemos remover el ulitmo elemento de un array con un pop

frutas.pop()
console.log(frutas)

//podemos remover el primer elemento de un array con un shift

frutas.shift()
console.log(frutas)


//slice, metodo que permite copiarme un rango de la cadena del array, genera una nueva instancia
//el segundo valor es no incluyente

const frutasCompradas = frutas.slice(0, 1)

console.log(frutasCompradas)

//puedo decidir que empiece a cortar y que no tenga un limite
//va a mostrar desde la posicion 3 porque corta en la 2

const algunasFrutas = frutas.slice(2)

console.log(algunasFrutas)

//splice
//permite recortar una cadena
//aniadir nuevos elementos
//eliminar elementos
//eliminar y aniadir elementos
//afecta al array original

const estudiantes = ["Fabricio", "carlos", "sol", "mia"]
console.log(estudiantes)
//el primer valor hace referencia al indicie en donde se quiere empezar a aniadir o eliminar
//el segundo valor, la cantidad de elementos que se quieran recortar, a partir de ese valor, hacia la derecha

estudiantes.splice(2, 0, "juan")

console.log(estudiantes)


estudiantes.splice(1, 0, "adrian")


//borrar un elemento y desplazarlo por otro

const utiles = ["lapiz", "goma", "regla", "lapicera"]
console.log(utiles)

utiles.splice(2, 1, "corrector")

console.log(utiles)

//el splice se queda con los elementos que se removieron del array (remover corrector)

const remocionSplice = utiles.splice(2,1)

console.log(remocionSplice)

//se puede borrar y aniadir a la vez

utiles.splice(0, 1, "sacapuntas")
console.log(utiles)

// join: transforma un array en una cadena de caracteres y permite que se elija como separar los elementos de la cadena

console.log(estudiantes.join(", siguiente: "))

//concat: une 2 arrays diferentes

const unirArrays = utiles.concat(estudiantes)

console.log(unirArrays)


//indexOf: nos devuelve el indice de un elemento del array

console.log(unirArrays.indexOf("juan"))

//reverse: da vuelta el array

unirArrays.reverse()
console.log(unirArrays)