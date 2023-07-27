//funciones

const calculadora = (x, y, operador) => {
    if(operador === "suma"){
        return x + y
    } else if(operador === "resta"){
        return x - y
    } else if (operador === "multiplicacion"){
        return x * y
    } else if (operador === "division") {
        return x / y
    }
}

//para elevar la abstraccion, voy a enajenar a la funcion de orden superior de las operaciones mas sencillas

const suma = (x, y) => x + y

const resta = (x, y) => x - y

const multiplicacion = (x, y) => x * y

const division = (x, y) => x / y

//nueva funcion con nivel de abstraccion

const calculadora2 = (x, y, operacion) => {
    return operacion(x, y)
}

console.log(calculadora2(2, 2, multiplicacion))


//funcion de orden superior : funciones que operan con otras funciones, nos permiten abstraer las funciones




//forEach: es un metodo que itera arrays, recibe un callback, no retorna nada, parametro obligatorio
//el primer parametro hace referencial al elemento actual
//el segundo al indice del elemento
//el tercero al array qye se esta iterando


const nombres = ["alan", "sol", "luz"]

nombres.forEach((elemento, indice, array) => {
 console.log(elemento)
 console.log(indice)
 console.log(array)
})


//find(busca un elemento en una array)
//tiene un parametro obligatorio que representa al elemento actual

const buscarAlumno = nombres.find((persona, indice, array) =>{
    console.log(indice)
    console.log(array)
    return persona === "sol"
})

console.log(buscarAlumno)


// filter (filtrar)
//recibe un callback(es utilizar una funcion en otra funcion) como argumento

const clientes = [
    {
        nombre: "adrian",
        tieneDeuda: false
    },
    {
        nombre:"luis",
        tieneDeuda:false
    },
    {
        nombre:"marco",
        tieneDeuda: true
    }
]

const clientesSinDeuda = clientes.filter((cliente) => {
    return cliente.tieneDeuda === false

})
 console.log(clientesSinDeuda)


 // some  (algunos)
//verifica que al menos un elemento del array cumpla con la condicion, recibe un callback como argumento, tiene un parametro obligarorio que representa al elemento actual
//retorna un boolean

const verificarDeuda = clientes.some ((cliente) =>{
    return cliente.tieneDeuda === true
})

console.log(verificarDeuda)

//map: retorna un nuevo array que incluye a todos los elementos del array anterior en donde estos pueden ser transformados
//recibe un callback

const nombresMayuscula =  nombres.map( (nombre) =>{
    return nombre.toUpperCase()
} )
console.log(nombresMayuscula)


//reduce: actua sobre un array y lo vuelve un dato individual, lo reduce a un solo dato, este dato ya no va a ser un array

const numeros = [1, 3, 3, 1, 2, 2]

const reducirAUnicoValor = numeros.reduce((acc, elementoActual) => {
    return acc + elementoActual
}, 0)
console.log(reducirAUnicoValor)


const letras = ["a", "b", "c", "d", "e", "f"]

const reducirAUnicoValorLetras = letras.reduce((acc, elementoActual) => {
    return acc + elementoActual
}, "")
console.log(reducirAUnicoValorLetras)