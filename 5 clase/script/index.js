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

console.log(validarEdad(45))
//this, dentro de la funcion representa al contexto de la funcion, fuera de la funcion a un contexto global

// function cosas () {
//     const nombre = "lautaro"
//     let edad = 21
// }


//objetos, contienen propiedades, agrupa informacion relacionada entre si.

//sintaxis de objeto

const persona = {
    nombre: "lautaro",
    apellido : "pitto",
    domicilio: "calle 123",
}
// nombre: (clave) - "lautaro" (valor)
//se deben separar por coma, el orden no es relevante, 
console.log(persona)


//para poder ver un valor debo utilizar la notacion de punto
console.log(persona.apellido)

//interpolacion con la propiedad nombre del objeto persona

console.log(`hola ${persona.nombre}`)

//otro objeto

const mesa = {
    patas: 4,
    material: "madera",
    color: "caoba",
    precio: 50000,
    ancho: 1.50,
    largo: 3,
    peso: 20,
    alto: 1.40,
}

//los objetos pueden contener datos simples (como number, boolean, string, etc) y tambien otros objetos y ademas arrays

const inventario = {
    lapiceras: 4,
    notebook: true,
    mascotas: ["lola", "uma"],
    electronicos: {
        play: true,
        tv: true,
    },
    escritorio: true,
    verificarInventario: () => console.log(`usted tiene ${inventario.lapiceras} lapiceras`),
}
console.log(inventario)
//acceder a un valor objeto dentro de un objeto

console.log(inventario.electronicos.play)

//llamar un metodo (notacion de punto, propiedad y parentesis)

inventario.verificarInventario()

//como aniadir nuevos valores (propiedad: clave/ valor)
inventario.botella = true;

inventario.electronicos.auriculares = true

//puedo reasignar el valor de propiedades anteriores

//las propiedades de un objeto son como un let y puedo reasignar el valor 

inventario.lapiceras = 20

//puedo deletear contenido de un objeto

delete inventario.mascotas



//constructores: es como un molde que permite crear o instanciar muchos objetos con las mismas caracteristicas

function Estudiante (nombre, esEstudiante, calificacion) {
    this.nombreEstudiante = nombre;
    this.estudiante = esEstudiante;
    this.calificacion = calificacion;
}

const estudianteLautaro = new Estudiante("lautaro", true, 10)

console.log(estudianteLautaro)



// class constructor:son equivalentes a una funcion constructora y pueden definir distintos tipos de metodos. es lo mismo que los constructores
class Ensalada {
    constructor (ingrediente1, ingrediente2, ingredientes3, aderezo) {
        this.ingrediente = ingrediente1;
        this.ingrediente2 = ingrediente2;
        this.ingredientes3= ingredientes3;
        this.aderezo = aderezo;
    }
    hacerEnsalada(){
        console.log(`la ensalada es ${this.ingrediente}, ${this.ingrediente2}, ${this.ingredientes3} y tiene como aderezo ${this.aderezo}`)
    }
}

const ensaladaFavorita = new Ensalada ("lechuga", "tomate", "zanahoria", "mayonesa")

ensaladaFavorita.hacerEnsalada


//operador in: devuelve un true si encuentra cierta propiedad dentro de un objeto

console.log("aderezo" in ensaladaFavorita)
console.log("asdfa" in ensaladaFavorita)