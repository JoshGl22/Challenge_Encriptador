function botonEncriptar() {
    let recibo_flag = validarTexto(text_1.value)

    if (recibo_flag == true) {
        alertar("No se permiten números o espacio vacío")
        text_1.value = ""
        setTimeout(()=>text_1.focus(), 2300)
    }
    else {
        text_2.value = encriptar()
        text_1.value = ""
    }
}

function botonDesencriptar() {
    let recibo_flag = validarTexto(text_1.value)

    if (recibo_flag == true) {
        alertar("No se permiten números o espacio vacío")
        text_1.value = ""
        setTimeout(()=>text_1.focus(), 2300)
    }
    else {
        text_2.value = desencriptar()
        text_1.value = ""
    }
}

function botonCopiar() {
    let mensaje = document.querySelector("#mensaje")

    navigator.clipboard.writeText(text_2.value)
    text_2.value = ""
    mensaje.innerHTML = "Texto copiado"
    setTimeout(() => mensaje.innerHTML = "", 4000)
    text_1.focus()
}

function encriptar() {
    let texto_NoEncript = text_1.value.toLowerCase()
    let texto_encript
    //img: i = toma letras mayusculas y minusculas
    // g = que tome todo el texto
    // m = tome en cuenta multiples lineas
    for(let i = 0; i != letras.length; i++){
        const regex = new RegExp(letras[i], 'img') 

        if(i == 0){
            texto_encript = texto_NoEncript.replace(regex, cifrado[i])
        }
        else{
            texto_encript = texto_encript.replace(regex, cifrado[i])
        }
    }
    return texto_encript
}

function desencriptar() {
    let texto_encript = text_1.value.toLowerCase()
    let texto_desencript

    for(let i = 0; i != letras.length; i++){
        const regex = new RegExp(cifrado[i], 'img') //Evaluando el valor del array

        if(i == 0){
            texto_desencript = texto_encript.replace(regex, letras[i])
        }
        else{
            texto_desencript = texto_desencript.replace(regex, letras[i])
        }
    }
    return texto_desencript
}

function validarTexto(texto) {
    let flag = (noTieneNumeros(texto) == false || texto == "") ? true : false
    return flag
}

function noTieneNumeros(cadena) {
    let expReg = /\d/; // Expresión regular que busca cualquier número
    return !expReg.test(cadena); // Devuelve true si no se encuentra ningún número
}

function alertar(info) {
    Swal.fire({
        html: '<span class="textoAlert">' + info + '</span>',
        background: "linear-gradient(150deg, #00FF00 20%,#000000)",
        icon: "warning",
        iconColor: "white",
        width: "30%",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

function animarTexto(llave, strings, loopCount){
    const typed = new Typed(llave, {
        strings: generarStrings(strings),
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
        startDelay: 1500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: loopCount, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '_', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
    });
}

function generarStrings(strings){
    let arrStrings = strings.split(",")
    return arrStrings
}   

let text_1 = document.getElementById("area-texto1")
let text_2 = document.getElementById("area-texto2")
let letras = ["e","i", "a","o","u"], cifrado = ["enter", "imes", "ai", "ober", "ufat"]
let div_logos = document.getElementById("div-logos")
let text_follow = document.getElementById("follow")

animarTexto(".typed", "Ingresa texto, Encripta, Desencripta, Con Encryption, (¬‿¬ )", false)

div_logos.addEventListener('mousemove', function(event){
    text_follow.innerHTML = "Sigueme en"
    text_follow.classList.add("texto-transicion");
    text_follow.style.margin = "0 auto"
})
div_logos.addEventListener('mouseleave', function(event){
    text_follow.innerHTML = ""
    text_follow.classList.add("texto-transicion");
    text_follow.style.margin = "0"
})