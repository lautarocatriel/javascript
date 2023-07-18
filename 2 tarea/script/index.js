// const colorVerde = "verde";
// console.log(true)
// const colorRojo = "rojo";
// console.log(false)
// const colorAmarillo = "amarillo";
// console.log(false)

// const preguntarColor = prompt ("ingrese color");

// if (preguntarColor === colorVerde) {alert("usted puede pasar")} 
// else if (preguntarColor === colorRojo || colorAmarillo) {alert("usted no puede pasar")}

const valorSemaforo = "verde"

if (valorSemaforo === "amarillo" || valorSemaforo === "rojo"){console.log(false)
} else if (valorSemaforo === "verde"){
    console.log(true)
}else{console.log("error: color de semaforo invalido")};





//4

let pasoTest = true;
let tieneMultasImpagas = false;
let pagoImpuestos = true;


if(pasoTest && pagoImpuestos && tieneMultasImpagas === false){
    console.log(true)
} else {
    console.log(false)
}