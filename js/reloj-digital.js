// array con 5 imágenes de ./img
const imgFondo = [
    'url("./img/img1.png")',
    'url("./img/img2.jpg")',
    'url("./img/img3.jpg")',
    'url("./img/img4.jpg")',
    'url("./img/img5.jpg")'
];

let currentIndex = 0;  // indice para recorrer las imagenes

// RECOJO LOS DIV DEL HTML
const dashboard = document.getElementById('dashboard'); // en dashboard ire mostrando las imagenes de fondo
const zonaHorariaDiv = document.getElementById('zonaHorariaDiv');
const relojDigital = document.getElementById('reloj-digital');
const horaDiv = document.getElementById('hora');
const fechaDiv = document.getElementById('fecha');

/*****************************************
  FUNCION PARA CAMBIAR LA IMAGEN DE FONDO
******************************************/
function changeBackground() {
  dashboard.style.backgroundImage = imgFondo[currentIndex]; // el estilo background-image en el css lo voy cambiando desde aqui

  // currentIndex se queda en bucle infinito recorriendo el array imagenes gracias a %
  currentIndex = (currentIndex + 1) % imgFondo.length;
}


// cambia la imagen cada 5 segundos
setInterval(changeBackground, 5000);
// iniciamos con la primera imagen
changeBackground();


/************************************************************************
  FUNCION QUE COMPONE LA HORA Y FECHA Y LO VA ACTUALIZANDO CADA SEGUNDO.
*************************************************************************/
function actualizarReloj() {
  const fechaHora = new Date(); // recojo la fecha y hora cada segundo para ir actualizandola

  // extraigo las horas, minutos y segundos del objeto Date
  const horas = fechaHora.getHours();
  const minutos = fechaHora.getMinutes();
  const segundos = fechaHora.getSeconds();
  const formatoHora = `${horas < 10? '0' + horas : horas}:${minutos < 10? '0' + minutos : minutos}:${segundos < 10? '0' + segundos : segundos}`;
  horaDiv.textContent = formatoHora;

  // recogemos en una constante el dia, mes, año
  const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const dia = fechaHora.getDate();
  const mes = fechaHora.getMonth() + 1;
  const año = fechaHora.getFullYear();
  const formatoFecha = `${diaSemana[fechaHora.getDay()]}, ${dia}/${mes}/${año}`;
  fechaDiv.textContent = formatoFecha;

  setTimeout(actualizarReloj, 1000);
}

actualizarReloj();


// zona horaria
const zonaHoraria = obtenerZonaHoraria();
zonaHorariaDiv.textContent = zonaHoraria;

/**************************************
  FUNCION PARA OBTENER LA ZONA HORARIA
***************************************/
function obtenerZonaHoraria() {
  const opciones = { timeZoneName: "long" }; // obtenemos la zona horaria en formato largo
  const zonaHoraria = new Intl.DateTimeFormat("es-ES", opciones).format(new Date());
  return zonaHoraria.split(',')[1]; // zonaHoraria es un string. convertimos a array utilizando ',' como separador y cogemos la posicion 1 del array
}