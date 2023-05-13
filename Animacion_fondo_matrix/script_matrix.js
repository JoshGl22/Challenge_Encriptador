const canvas = document.getElementById('canv');
const pincel = canvas.getContext('2d');

let ancho = canvas.width = window.innerWidth //todo el ancho de la pagina
let alto = canvas.height = window.innerHeight //todo el alto de la pagina

const colums = Math.floor(ancho / 20) + 1;
const pos_y = Array(colums).fill(0);

pincel.fillStyle = "black";
pincel.fillRect(0, 0, ancho, alto);

function matrix() {
    // Se difumina el texto con un fondo negro transparente
    pincel.fillStyle = '#0003';
    pincel.fillRect(0, 0, ancho, alto);

    // Establezca el de los caracteres en color verde 
    pincel.fillStyle = '#0f0';
    pincel.font = '15pt monospace';

    // para cada columna pone un caracter aleatorio al final
    pos_y.forEach((y, end) => {
        //generando caracteres aleatorios
        const texto = String.fromCharCode(Math.random() * 128);
        const x = end * 20; //definiendo la coordenada X de la columna, 
        // La coordenada Y ya ha sido dado en line-28

        // graficando el caracter en (x, y)
        pincel.fillText(texto, x, y);

        //aleatoriamente reinicia el final de la columna, si tiene al menos 100px de alto  
        if (y > 100 + Math.random() * 10000) pos_y[end] = 0;
        else pos_y[end] = y + 20;
    });
}

// Función que se ejecutará cada vez que cambie el tamaño de la ventana
function ajustarCanv() {
    // Obtener las dimensiones de la ventana del navegador
    ancho = window.innerWidth;
    alto = window.innerHeight;

    // Establecer el ancho y alto del canvas en píxeles
    canvas.width = ancho;
    canvas.height = alto;

    // Ajustar el tamaño del canvas en la pantalla
    canvas.style.width = '100%';
    canvas.style.height = '100%';
}

setInterval(matrix, 90);

window.addEventListener("resize", ajustarCanv);