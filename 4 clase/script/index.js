//length
//variable de acceso global
let acc = 0;
const nombre = "lautaro";

for (let i = 0; i < nombre.length; i++) {
    if (nombre[i] === "a" || nombre[i] === "e" || nombre[i] === "i" ||
    nombre[i] === "o" ||nombre[i] === "u") {
        acc = acc + 1   
        console.log(`para el valor ${nombre[i]} la suma de la acumuladora por vocal es ${acc}`)
    }
}

//variable de acceso de bloque
if (10 > 5) {
    const apellido = "pitto"
    console.log (apellido)
}
//si yo hago un console.log(apellido) no la voy a poder ver porque esta dentro del bloque



//funciones, son bloques de codigo reutilizables que permiten solucionar un problema especifico

//funcion por declaracion

function saludar (usuarios){
    console.log (`hola ${usuarios}`)
}

saludar("lautaro")
saludar("marcos")
saludar("maria")


//funcion que me permita sumar numeros

function suma (a, b) {
    console.log(a + b)
}

suma(10, 40)

//el orden de los parametros importa si yo pido nombre y apellido, no puedo despues pedir el apellido y el nombre

//funcion que me permite ver todos los resultados de todas las tablas

function tablademultiplicar (numero){
    for (let i = 1; i<= 10; i++) {
        console.log(`${i} x ${numero} = ${numero * i}`)
    }
}


tablademultiplicar (10)


//retornar datos (solamente se pueden usar retornos dentro de una funcion)

function multiplicar (a, b){
    return a * b
}

multiplicar (20, 20)

console.log(multiplicar(5 * 4))

//las funciones pueden llamarse y guardarse en otras variables

const resultadoMultiplicacion = multiplicar(10, 10)

console.log(resultadoMultiplicacion)
