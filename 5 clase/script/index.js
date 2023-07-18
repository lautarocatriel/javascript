//funciones
function semaforo (colorActual) {
    if (colorActual === "verde") {
        console.log("puede pasar")
    } else {
        console.log("no puede pasar")
    }
}

semaforo("verde")
semaforo("rojo")


//funcion por expresion (funciones anonimas), no pueden ser utilizadas antes de su inicializacion

const gritar = function (nombre) {
    console.log(`hoal ${nombre}`)

}


//sintaxis simplificada ecmascript 6
//arrow function

const suma = (a, b) => {
return a + b
}

//sintaxis simplificada relativa a parametros

const mostrarNombre = nombre =>{
    return nombre
}

//sintaxis simplificada relativa al retorno (return implicito)

const validarEdad = edad => edad > 18 && "puede pasar"

console.log(validadEdad(45))