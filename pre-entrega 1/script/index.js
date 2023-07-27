// 1) Se precisa un algoritmo que reciba por prompt el mail del usuario y que valide si este mail contiene un "@". Para ello se precisará un bucle que pueda recorrer cada caracter de este valor y que en base a una condición, refleje como alerta si "Es un mail válido" o "Es un mail inválido", en el caso de que no contenga "@".


// const mailDeUsuario = prompt("ingrese su mail");
// let acc = 0
// for(let i = 0; i < mailDeUsuario.length; i++) {
//     if (mailDeUsuario[i] === "@") {
//     acc = acc + 1
//     }
// }
// if(acc === 1){
//     alert("es un mail valido")
// } else {
//     alert("es un mail invalido")
// }

// 2) Se precisa un algoritmo que pida a través de un prompt el teléfono celular del usuario (ej: 1123456789 ) y que verifique, mediante un bucle, si este contiene 10 caracteres. Se necesitará una variable acumuladora que sume 1 cada vez que el bucle recorra cada uno de los valores de este dato. Luego de utilizar este valor, se deberá realizar una estructura que valide si el teléfono del usuario tiene 10 caracteres, si es así, se deberá mostrar una alerta que diga: "Su teléfono ingresado es válido", en caso contrario, se deberá mostrar una alerta que diga: "Su teléfono ingresado es inválido".

// const celular = (prompt("ingrese su numero de celular"))
// let acc = 0

// for(let i = 0; i < celular ; i++) {
//  if(celular[i] < 11){
//     acc = acc + 1
//     console.log(celular[i])
//  }
// else if(acc === 10) {
//     alert("Su teléfono ingresado es válido")  
//     break
// }
// else if ( acc !== 10){
//     alert("Su teléfono ingresado es inválido")
//     break
// }
// }
// else if (typeof(celular) === String) {
// alert("Su teléfono ingresado es inválido")}

// }

// 3) Se precisa un algoritmo que pida al usuario, a través de prompts, dos valores: El primero un numero mínimo y el segundo un número máximo. Luego se deberán convertir estos valores en numbers e iterar sobre ese rango de valores con un bucle. Una estructura condicional debe evaluar si el número es par o impar. Para el caso par, se deberán sumar todos sus valores en una variable acumuladora, para el caso impar, se deberan sumar todos los valores en otra variable acumuladora. Luego se deberán mostrar dos alertas, para el caso par: "La suma de todos los números pares da x número" y para el caso impar: "La suma de todos los números impares da x número".
//método sugeridos Number(), uso de acumuladoras, uso de variables, for, if, resto %

// const numeroMinimo = Number(prompt("ingrese un valor minimo"));
// const numeroMaximo = Number(prompt("ingrese un valor maximo"));
// let accPar = 0
// let accImpar = 0

// for(let i = numeroMinimo; i <= numeroMaximo; i++){
//     console.log(i)
//     if(i % 2 === 0 ){
//         accPar = accPar + 1
//     } else {
//         accImpar = accImpar + 1
//     }
// }
// alert(`la suma de todos los numeros pares es ${accPar}`)
// alert(`la suma de todos los numeros impares es ${accImpar}`)

// 4) Se precisan de un bucle que se inicialice en 100 e itere hasta 250. Este debe contener una estructura condicional que verifique si el número es par o impar. Para el caso par, se deberá visualizar en consola la raíz cuadrada del valor, para ello usar el método Math.sqrt()

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt

// para el caso impar, se deberá visualizar en consola la potencia de esos valores, para ello usar el método Math.pow() ej: Math.pow(valorAPotenciar, 2) = x^2

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

for(let i = 100; i <= 250; i++){
    if(i % 2 === 0){
       console.log( Math.sqrt(i) )
    } else{
        console.log(Math.pow(i, 2))
    }

}