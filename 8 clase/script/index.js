const numeros = [123, 1234, 234 ,5 ,23 , 0, 23]
console.log(numeros)
//sort (ordenar): es un metodo de array, recibe un callback, en el caso de que tratamos con numeros va a tener 2 parametros obligatorios

numeros.sort()

console.log(numeros)

//uso de callback en sort para generar un ordenamiento apropiado


const sortOrdenadaAscedente = numeros.slice().sort((a, b) => {
    return a - b
})

console.log(sortOrdenadaAscedente)

//descedente

const sortOrdenadaDescendete = numeros.slice().sort((a, b) => {
    return b - a
})

console.log(sortOrdenadaDescendete)

//para string (no necesita un callback, se ordena por el unicode)

const frutas = ["kiwi", "naranja", "anana", "uva", "sandia"]

const copiaFrutasAZ = frutas.slice().sort()

console.log(copiaFrutasAZ)

//de la Z a la A

const copiaFrutasZA = frutas.slice().sort((a, b) => {
    if (b < a){
        return -1
    } else if (b > a){
        return 1
    } else {
        return 0
    }
})

console.log(copiaFrutasZA)

/////////////////////////////////

//los objetos tienen propiedades que pueden contener datos y tambien tienen metodos (sus funciones integradas), que pueden ser utilizado a traves de la notacion de "."

//objeto Math: tiene propiedades y metodos para constantes y funciones matematicas

console.log(Math)

//valor de pi

console.log(Math.PI)

//Math.min, devuelve el menor numero que se pase como argumento

console.log(Math.min(5, 1, 1000, 3))


//Math.max, muestra el mayor

console.log(Math.max(1, 4, 7, 200))


//Math.sqrt, raiz cuadrada de un numero

console.log(Math.sqrt(81))

//Math.random, es un metodo pseudoaleatorio, devuelve un numero entre el 0 y el 1

console.log(Math.random())

//podemos modificar el rango utilizando la siguiente formula
//Math.random() * (max - min) + min

console.log(Math.random() * (10 - 2) + 2)

//Math.floor, redondea hacia abajo

const numeroRandom = Math.random() * (10 - 2) + 2
console.log(Math.floor(numeroRandom))

//Math.ceil, redondea hacia arriba

console.log(Math.ceil(numeroRandom))


///////////////////////////////////////


//objeto date


const fechaActual = new Date()

console.log(fechaActual)

//en js los meses van de 0 a 11

console.log(new Date(2001, 11, 26))

//getMonth()

const fecha = new Date()

console.log(fecha.getMonth())

//getDate()

console.log(fecha.getDate())

//getFullYear

console.log(fecha.getFullYear())

//resta entre fechas

console.log(fechaActual - fecha)

//toDateString(), se visualiza en formato norteamericano

console.log(fechaActual.toDateString())


//toLocaleDateString, muestra el local

console.log(fechaActual.toLocaleDateString())

// muestra fecha y hora en formato local

console.log(fechaActual.toLocaleString())

//toTimeString()

console.log(fechaActual.toTimeString())


