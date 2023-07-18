//null y undefined

//undefined
let esUndefined;
console.log(esUndefined);

//null
let esNull = null;

//boolean (true y false)

let esEstudiante = true;
let esProfesor = true;
let lautaroEsProfesor = false;
console.log(esEstudiante);

//estado booleano

//false

console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(NaN));
console.log(Boolean(false));

//operadores de comparacion

console.log(100 > 10);

//mayor o igual

console.log(10 >= 5);

//true

console.log(20 == "20");

//false porque es un comparador estricto

console.log(20 === "20");

//operador de desigualdad

//false
console.log(100 != "100");

//true porque es estricto
console.log(100 !== "true");

//operadores logicos

//and &&, ambos operadores tienen que ser true

//true
const jamon = true;
const queso = true;

console.log(jamon && queso);

console.log(true && true);

console.log(100 && 6 && 4 && 65 && 77); //va a mostrar el 77

//false

console.log(true && false);

console.log(false && false);

console.log(true && false);

console.log(100 && "");

console.log(100 && 6 && 0 && 65 && 77); //va a mostrar el 0 porque es el fallo, el false

//or || siempre va a tomar el true

console.log(true || false); //true

console.log(true || true); //true

console.log(false || true); //true

console.log(false || false); //false

//combinacion de operadores comparacion y logicos
//pregunta si el usuario es igual al ingresado y pregunta si la contrasenia es igual a la igresada, si son iguales, avisa que es un si, un true

const usuario = "lautaro";
const contrasenia = "1234";

const preguntarUsuario = prompt("ingrese su usuario");
const preguntarContrasenia = prompt("ingrese su contrasenia")

console.log( (usuario === preguntarUsuario) && (contrasenia === preguntarContrasenia));

//para poder extender funcionalidades y realizar ejecuciones de codigo al realizarse una comparacion de operando de comparacion y logicos, podemos usar un if

//if (si es true hacer esto, si es false esto)

if ( (usuario === preguntarUsuario) && (contrasenia === preguntarContrasenia)) {
    alert("bienvenido al sitio web")
} else if (alert("usuario o contrasenia incorrecta"));



