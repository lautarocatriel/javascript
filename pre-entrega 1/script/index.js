// 1) Se precisa un algoritmo que reciba por prompt el mail del usuario y que valide si este mail contiene un "@". Para ello se precisará un bucle que pueda recorrer cada caracter de este valor y que en base a una condición, refleje como alerta si "Es un mail válido" o "Es un mail inválido", en el caso de que no contenga "@".


//const mailDeUsuario = prompt("ingrese su mail");
// let acc = 0
//for(let i = 0; i < mailDeUsuario.length; i++) {
// if (mailDeUsuario[i] !== "@") {
//  acc = acc + 1
//  alert("Es un mail invalido")
// }
// else if (mailDeUsuario[i] === "@" && acc >\ 1){
//    alert("es un mail valido")
//    break

// }
// }

// 2) Se precisa un algoritmo que pida a través de un prompt el teléfono celular del usuario (ej: 1123456789 ) y que verifique, mediante un bucle, si este contiene 10 caracteres. Se necesitará una variable acumuladora que sume 1 cada vez que el bucle recorra cada uno de los valores de este dato. Luego de utilizar este valor, se deberá realizar una estructura que valide si el teléfono del usuario tiene 10 caracteres, si es así, se deberá mostrar una alerta que diga: "Su teléfono ingresado es válido", en caso contrario, se deberá mostrar una alerta que diga: "Su teléfono ingresado es inválido".

const celular = (prompt("ingrese su numero de celular"))
let acc = 0

for(let i = 0; i < celular ; i++) {
 if(celular[i] < 11){
    acc = acc + 1
    console.log(celular[i])
 }
else if(acc === 10) {
    alert("Su teléfono ingresado es válido")  
    break
}
else if ( acc !== 10){
    alert("Su teléfono ingresado es inválido")
    break
}
}
// else if (typeof(celular) === String) {
// alert("Su teléfono ingresado es inválido")}

// }
