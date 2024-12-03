const dashboard = document.getElementById('dashboard'); // en dashboard ire mostrando las imagenes de fondo

// array con 5 imágenes de ./img
const imgFondo = [
    'url("./img/img1.png")',
    'url("./img/img2.jpg")',
    'url("./img/img3.jpg")',
    'url("./img/img4.jpg")',
    'url("./img/img5.jpg")'
];

let currentIndex = 0;  // indice para recorrer las imagenes

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

function abrirModulo(url) {
  console.log(url);
  // abre una nueva ventana con la url del modulo
  window.open(url, '_blank');
}