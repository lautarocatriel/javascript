//switch
const frutaOVerdura = "naranja"

switch (frutaOVerdura) {
    case "banana":
        console.log("el kilo de banana esta 800")
        break;
    case "pomelo":
        console.log("el kilo de pomelo esta 500")
        break;
    case "naranja":
        console.log("el kilo de naranaja esta 900")
        break;
        default:
            console.log("no contamos con este producto");
}


//bluces
//for (inicializacion; condicion; contador){
    //sentencias a ejecutar
//}
for (let i = 0; i < 10; i = i + 1){
console.log(i)
}
//variable i vale 0, cero es menor a 10, entonces le sumo 1

//pares o impares

for (let valor = 0; valor < 100; valor++) {
    if ( valor % 2 === 0 ) {
        console.log(valor)
    }
}

//while (condicion) {
//    sentencias
//}
let valorInicial = 0;
while (valorInicial< 3 ) {
    console.log(`el valor de while va por ${valorInicial}`);
    valorInicial++;
}

//do while
// let valorInicialDo = 10

// do{
//     console.log("hace esto si o si")
// } while (valorInicialDo > 1000) {
//     console.log ("es mayor")
// }

//for acumuladora

let acc = 0

for (let valoracc = 0; valoracc < 10; valoracc++){
    acc = acc + valoracc
    console.log(acc)
}