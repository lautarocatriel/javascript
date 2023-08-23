//sugar syntax: plantea una forma que facilite la legibilidad del codigo, plantea la abstraccion del codigo
//es una version simplificada del codigo



let valor = 10;

valor = valor + 1

//podemos simplificar la operacion de reasignacion y suma 
//con el operador 
valor+=2

let acc = 0

for (let i = 0; i< 10;i++){
    acc +=10
}

//operador unario: operadores que se aplican a un solo operando
//++ incrementa en 1 y el operador -- decrementa 1

let edad = 21

//si se usa de manera posterior al valor, primer se retorna el valor y luego se hace el incremento

console.log(edad++)

console.log(edad)

//si lo utilizo antes primero hace el incremento y luego retorna

console.log(++edad)

//cortocircuito

let edadCliente = 20
let permisoDeLosPadres = true

if(edadCliente >= 18 || permisoDeLosPadres === true){
    console.log("puede ver la pelicula ")
}

//or 
//deuvelve siempre el primer valor true
const jamon = 0
const queso = 1

console.log(jamon || queso)

let clientes = [
    {
        nombre:"alan",
        cliente:true
    },
    {
        nombre:"luis",
        cliente:true
    },    
    {
        nombre:"alberto",
        cliente:true
    },
    {
        nombre:"sol",
        cliente:false
    }
]

clientes.forEach(elemento => {
    console.log(elemento.cliente || "bienvenido nuevo cliente")
})


//si se altera el orden, puede alterar los resultados

//clientes.forEach(elemento => {
//    console.log("bienvenido nuevo cliente"||elemento.cliente)
//})

//and
//devuelve el ultimo valor, sino undefined
//si el primer operando es true, entonces retorna, el segundo operando

//los 2 tienen que ser true

const saludarAUsuario = valor =>{
    if(cliente === true){
        alert("hola cliente")
    }
}

const verificarSiEsCliente = true

verificarSiEsCliente && saludarAUsuario(verificarSiEsCliente)

//es lo mismo que esto

//if(verificarSiEsCliente){
    //saludarAUsuario()
//}



//operador ternario
//es un if / else en una sola sentencia
//condicion ? para caso true : para caso false
const edadDeAdolescente = 15

const aprobacionPadres = true

edadDeAdolescente >= 18 || aprobacionPadres ? console.log("puede ver la pelicula") : console.log("no puede ver la pelicula")


//nullish coalescing (funcion nula) = ??
//funciona como un or, retorna el primer valor que no sea false 
//evalua si el primer operando es null o undefijed, si no lo es, retorna el primer valor, sino el segundo

console.log(null ?? "hola")

//optional chaining
//el uso de este operador siempre va a estar relacionado a propiedades anidada
//valida que si no exista una propiedad anidada, no se genere un error que interrumpa la ejecucion del codigo
//operador es el ?
//se incorpora entre las propiedades y puedan ser undefined

const persona = {

}

console.log(persona.familia)
console.log(persona.familia?.hermano)

let mesa;

console.log(mesa?.altura ?? "no hay altura disponible")


//destructuring
//caracteristica que permite extraer valores de un objeto o array
//sintaxis:const {propiedad 1, propiedad 2} = objeto;
const silla = {
    patas: 4,
    color:"rojo",
    precio: 20000,
    material:"madera"
}
const {color, precio} = silla

console.log(color)

//alias de los objetos
//se puede asginar un nombre distinto a pesar de llamar a las propiedades de los objeto sen distintas ocaciones

const{color: colorDeLaSilla } = silla

console.log(colorDeLaSilla)