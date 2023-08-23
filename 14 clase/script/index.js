// //una alert
// Swal.fire("titulo", "texto", "success") //success es el icono de la tilde

// //podemos pasarle un objeto, y a traves de las diversas propiedades planteadas por la documentacion, facilitan la incorporacion y la estilizacion de diversas funcionalidades

// Swal.fire({
//     title: "esta es una alerta con un objeto",
//     text: "texto",
//     icon: "success",
//     footer: "footer"
// })

// //la funcionalidad estrella del sweet aler son las promesas, en donde dependiendo la respuesta obtenida, se genera una accion en consecuencia 

// Swal.fire({
//     title: 'Do you want to save the changes?',
//     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonText: 'Save',
//     denyButtonText: `Don't save`,
//   }).then((result) => {
//     /* Read more about isConfirmed, isDenied below */
//     if (result.isConfirmed) {
//       Swal.fire('Saved!', '', 'success')
//     } else if (result.isDenied) {
//       Swal.fire('Changes are not saved', '', 'info')
//     }
//   })

//   //ligar swal a un evento de click

//   document.querySelector("#button-pop-up").onclick = () => {
//     Swal.fire("me estan clickeando")
//   }


//toastify:libreria que permite implementar notificaciones

Toastify({
text: "hola, soy una tostada",
duration: 10000,
position: "right",
backgroundColor: "blue",
}).showToast();


//swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


//luxon libreria de fechas

const DateTime = luxon.DateTime;

//instanciar una fecha
const fecha = DateTime.local()
console.log(fecha)

//podemos usar toString o ToLocaleString para visualizar la fecha local
console.log(fecha.toString())

console.log(fecha.toLocaleString())

//.now() :muestra la hora actual

console.log(DateTime.now())

////pasar fecha especifica
const fechaEspecifica = DateTime.local(1950, 5, 20)
console.log(fechaEspecifica)

//podemos crear fechas a traves de objetos

const fechaPorObjeto = DateTime.fromObject(
{
    day:20,
    month:3,
    hour:14
},
{
    zona: "America/Buenos_Aires",
    numberingStystem: "beng"

}
)

console.log(fechaPorObjeto.toLocaleString())

//nomra iso

console.log(DateTime.fromISO("1934-04-12").toString())

//aceder a las fechas con los siguientes metodos

console.log(DateTime.now().year)
console.log(DateTime.now().day)
console.log(DateTime.now().month)
console.log(DateTime.now().second)
console.log(DateTime.now().weekday)
console.log(DateTime.now().zoneName)

//podemos visualizar diversos formatos de fecha

const fechaDeHoy = DateTime.now()

console.log(fechaDeHoy.toLocaleString(DateTime.DATE_SHORT)) //FECHA CORTA
console.log(fechaDeHoy.toLocaleString(DateTime.DATE_MED)) //FECHA ABREVIADA
console.log(fechaDeHoy.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)) //FECHA Y DIA ABREVIADOS
console.log(fechaDeHoy.toLocaleString(DateTime.DATE_FULL)) //FECHA COMPLETA
console.log(fechaDeHoy.toLocaleString(DateTime.DATE_HUGE)) //FECHA COMPLETA CON DIA DE LA SEMANA
console.log(fechaDeHoy.toLocaleString(DateTime.DATE_SIMPLE)) //HORA Y MINUTOS
