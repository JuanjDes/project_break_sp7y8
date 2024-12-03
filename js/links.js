/* Recibo nombre y url de enlaces desde el DOM */    
const linksDiv = document.getElementById('links');
const divEnlaces = document.getElementById('divEnlaces');
const nombreEnlace = document.getElementById('nombreEnlace');
const urlEnlace = document.getElementById('urlEnlace');
const btnAgregar = document.getElementById('btnAgregar');

let numEnlaces = 0;

// evento click en boton añadir enlace
btnAgregar.addEventListener('click', () => {
    const nuevoLink = {
        nombre: nombreEnlace.value,
        url: urlEnlace.value
    };
    
    numEnlaces++;

    // Almaceno en localStorage
    localStorage.setItem(`enlace_${numEnlaces}`, JSON.stringify(nuevoLink)); // guardo en localStorage nuevoLink en formato String
    
    // muestro en pantalla el nombre del enlace en formato boton
    divEnlaces.innerHTML += `
    <button id="btnEnlaces" onclick="abrirLink('http://${nuevoLink.url}')">${nuevoLink.nombre}</button>`;
    
    nombreEnlace.value = '';
    urlEnlace.value = '';
});

// recargo la pagina
window.addEventListener('DOMContentLoaded', () => {
    for(let i = 1; i <= localStorage.length; i++) {
        const link = JSON.parse(localStorage.getItem(`enlace_${i}`));
        if (link) {
            divEnlaces.innerHTML += `
            <button id="btnEnlaces" onclick="abrirLink('http://${link.url}')">${link.nombre}</button>`;

            numEnlaces = i;
        }
    }
    console.log('numero de enlaces: ', numEnlaces);
    nombreEnlace.value = '';
    urlEnlace.value = '';
});

// Funcion abrirlink() se utiliza en los onclick en los botones de los enlaces
function abrirLink(url) {
    window.open(url, '_blank'); // abro en una pestaña nueva
}