//destructuring de arrays
const frutas = ["kiwi", "ciruela", "manzana", "pera"]

const [frutaRica, frutaVioleta, , frutaPera] = frutas;

console.log(frutaRica)
console.log(frutaVioleta)
console.log(frutaPera)

//spread operator

const numeros = [123, 34, 5, 1]

//... permite que ingrese a los valores, porque .max no es un iterador, permite descomponer elementos de un dato iterable


console.log(Math.max(...numeros))


//combinar arrays

const combinarArrays = frutas.concat(numeros)

console.log(combinarArrays)

const combinarConSpread = [...frutas,...numeros]
console.log(combinarConSpread)

//copia con spread operator

const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const numCopiados = num

numCopiados.push(23442)

console.log(num === numCopiados)

//slice, stringify-parse, spread operator

const copiaSegura = [...num]

copiaSegura.push("pusheando a la copia")

console.log(copiaSegura)

console.log(num)

//ejemplo con stringify - parse

const clientes = [
    {
        nombre: "asldfk"
    },
    {
        nombre: "asldfk"
    },
    {
        nombre: "asldfk"
    },
    {
        nombre: "asldfk"
    },
]
const copiaClientes = clientes
console.log(clientes === copiaClientes)

const copiaClientesSegura = JSON.parse(JSON.stringify(clientes))

console.log(clientes === copiaClientesSegura)

//spread operator en obejtos

const mesa = {
    patasMesa: 4,
    colorMesa:"marron"
}

const silla = {
    patasSilla:3,
    colorSilla:"negro"
}

const juegoDeMesaYSillas = {...mesa, ...silla}

console.log(juegoDeMesaYSillas)


//rest parameters
//este operador,..., nos permite pasar x cantidad de parametros bajo un solo parametro visible
//siempre se genera un array al usar rest parameters
//se debera iterar para acceder a los valores de los parametros

const suma = (...numeros) =>{
    console.log(numeros)
    return numeros.reduce((acc, element)=>{
        return acc + element
    }, 0)
}

console.log(suma(10, 5, 6, 7, 8))




///////////////////////////////////////////

//si voy a trabajar con una masa de datos que viene desde una api, voy a necesitar en el dom que exista una etiqueta que contenga esos valores por ejemplo (table, div, etc)

//almacenar en una variable el nodo que contendra a todos mis nodos generados desde js

//const table = document.querySelector("#tabla-users")

//2)hacer las tarjetas

//const cards = array => {
//  const data = array.reduce((acc, element)=>{
//return acc + `
// <tbody>
// <tr>
//     <td>
//         ${element.first_name} ${element.last_name}
//     </td>
//     <td>
//         ${element.email}
//     </td>
//         ${element.gender || "none"}
//     <td>
//         ${element.app_name}
//     </td>
//         ${element.country || "none"}  usamos || para que se visualice si no hay algun dato
//     <td>
//         ${element.phone}
//     </td>
//     <td>
//         ${element.street_address}
//     </td>
// </tr> 
//</tbody>
//},
/* <head>
    <tr>
        <th>
            full name
        </th>
        <th>
            email
        </th>
        <th>
            gender
        </th>    
        <th>
            nickname
        </th> 
        <th>
            country
        </th>  
        <th>
            phone
        </th>    
        <th>
            street address
        </th>                     
    </tr>
</head> }*/

//table.innerHTML = data
//})



// cards(mockadata);



//2 iterar sobre los elementos
//mockdata.forEach(element =>{
//     console.log(element)
// )



//amar al selector para escuchar los cambios de los generos

//const selectorGenero = document.querySelector("#select-genero")

// const filtrarPorGenero = (genero, array) => {
//     return array.filter(element =>{
//         return element.gender && genero === element.gender.toLowerCase()
//     })
// }

// const filtrarGeneroPorNulo = (array) =>{
//     return  array.filter(element =>{
//         return element.gener === null
//     })
// }

// selecGenero.addEventListener("change", (e)=>{
//     console.log(e.target.value) //me muestra el valor del input
//if (e.target.value === "all"){
// cards(mockadata)
//} else if(e.target.value === "null"){
//     cards(filtrarPorGenero (mockdata))}
//else {
    //     cards(filtrarPorGenero(e.target.value, mockdata)}

// })

//busqueda por nombre
//const formBusquedaNombre = document.querySelector("#form-busqueda-nombre")
//const inputBusquedaNombre = document.querySelector("#input-nombre")

//const buscarUsuario = array =>{
//     return Array.find(persona =>{
//         const concatenarNombres = ${persona.first_name} ${persona.last_name}
//         return concatenarNombres === busqueda

//     })
// }

// formBusquedaNombre.onsumbit = (e) =>{
//     e.preventDefault()
// if(inputBusquedaNombre.value !== "" && inputBusquedaNombre.value !== null && inputBusquedaNombre.value !== undefined){
// const persona = buscarUsuario(mockdata, inputBusquedaNombre.value))    
 //alert(`la busqueda de ${persona.first_name} ${persona.last_name} fue existoso y trajo los siguientes datos : ${persona.street_address}`
 //}
// }