const contrasenaDiv = document.getElementById('contrasena');
const generarBtn = document.getElementById('generar');
const numCaracteres = document.getElementById('caracteres');
const passwordGenerada = document.getElementById('password-result');

// ARRAYS CON LETRAS MAYUSCULAS, MINUSCULAS, NUMEROS DE 0 A 9 Y CARACTERES ESPECIALES
const arrayMayusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const arrayMinusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
const arrayNumeros = ['0','1','2','3','4','5','6','7','8','9'];
const arrayEspeciales = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','[','{',']','}',';',':','"',',','.','<','>','/','?'];

// EVENTO DE CLICK EN BOTON Generar contraseña
generarBtn.addEventListener('click', () => {
    let contrasena = '';
    const caracteresTotales = parseInt(numCaracteres.value, 10);

    if (isNaN(caracteresTotales) || caracteresTotales < 12) {
        alert('Por favor, introduce un número valido de caracteres');
        return; // sale de la función
    }

    for (let i = 0; i < caracteresTotales; i++) {
        const randomArray = [arrayMayusculas, arrayMinusculas, arrayNumeros, arrayEspeciales];  // meto los arrays en uno solo
        const chosenArray = randomArray[Math.floor(Math.random() * randomArray.length)];  // chosenArray contiene uno de los arrays al azar
        const randomCharacter = chosenArray[Math.floor(Math.random() * chosenArray.length)];  // del array al azar obtengo un caracter

        contrasena += randomCharacter;  // añado el caracter al final de la cadena de contraseña

    }
    passwordGenerada.innerText = contrasena;
});