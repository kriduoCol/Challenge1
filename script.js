let botonEncriptar = document.getElementById("boton_encripcion");
let botonDesencriptar = document.getElementById("boton_desencripcion");
let botonCopiar = document.getElementById("boton_copiar");
let textoEntrada = document.getElementById("ingreso_texto_encripcion");
let textoSalida = document.getElementById("salida_texto_desencripcion");
let contenedorPadre = document.querySelector(".result");

// Habilita los botones de encriptar y desencriptar
function habilitarBotones() {
    botonEncriptar.disabled = false;
    botonDesencriptar.disabled = false;
}

// Habilita el botón de copiar
function habilitarCopiado() {
    botonCopiar.disabled = false;
}

// Actualiza la interfaz de la página
function actualizarPagina() {
    if(textoEntrada.value !== ""){
        contenedorPadre.classList.remove("no_texto");
    }
    textoEntrada.focus();
}

// Muestra un mensaje de alerta personalizado
function myAlert(message) {
    let alert = document.getElementById('custom-alert');
    alert.innerHTML = message;
    alert.style.display = 'block';
    setTimeout(() => {
        alert.style.display = 'none';
    }, 2000); // Oculta el alert después de 2 segundos
}

// Enfoca el área de texto para entrada
function focusTextArea() {
    textoEntrada.focus();
}

// Encripta el mensaje según las reglas definidas
function encriptarMensaje() {
    if (textoEntrada.value !== "") {
        // Verifica si el texto contiene solo letras minúsculas y espacios
        let regExp = /^[a-z\s]+$/;

        if (regExp.test(textoEntrada.value)) {
            let mensajeEncriptado = textoEntrada.value
                .replace(/e/gim, "enter")
                .replace(/i/gim, "imes")
                .replace(/a/gim, "ai")
                .replace(/o/gim, "ober")
                .replace(/u/gim, "ufat");

            textoSalida.value = mensajeEncriptado;
            textoSalida.innerHTML = mensajeEncriptado;
            actualizarPagina();
        } else {
            myAlert("Por favor escribe un texto válido, solo letras minúsculas y espacios.");
            focusTextArea();
        }
    } else {
        myAlert("Por favor escribe un texto");
        focusTextArea();
    }
}

// Desencripta el mensaje según las reglas definidas
function desencriptarMensaje() {
    if (textoEntrada.value !== "") {
        let mensajeDesencriptado = textoEntrada.value
            .replace(/enter/gim, "e")
            .replace(/imes/gim, "i")
            .replace(/ai/gim, "a")
            .replace(/ober/gim, "o")
            .replace(/ufat/gim, "u");

        textoSalida.value = mensajeDesencriptado;
        textoSalida.innerHTML = mensajeDesencriptado;
        actualizarPagina();
    } else {
        myAlert("Para desencriptar un mensaje, usa la caja de texto");
        focusTextArea();
    }
}

// Copia el mensaje desencriptado al portapapeles
function copiarMensaje() {
    if (textoSalida.value !== "") {
        navigator.clipboard.writeText(textoSalida.value);
        myAlert("Mensaje copiado");
    } else {
        myAlert("Nada que copiar");
    }
}

// Asignar funciones a los botones correspondientes
botonEncriptar.onclick = encriptarMensaje;
botonDesencriptar.onclick = desencriptarMensaje;
botonCopiar.onclick = copiarMensaje;
textoEntrada.onclick = habilitarBotones;
