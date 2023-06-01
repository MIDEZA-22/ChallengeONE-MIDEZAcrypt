const input = document.querySelector(".input");
const textarea = document.querySelector(".textarea");

function validarTexto(input) {
    var texto = input.value;
    var textoSinAcentos = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    var textoValido = textoSinAcentos.toLowerCase().replace(/[^a-z\s]/g, "");

    if (texto !== textoValido) {
        input.value = textoValido;
        alert("Ingresar solo letras minúsculas y sin acentos. Se ha corregido el texto.");
    }
}

function btnEncriptar() {
    const textoEncriptado = encriptar(input.value);
    textarea.value = textoEncriptado
    input.value = "";
}

function encriptar(stringEncriptada) {
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < llavesEncriptacion.length; i++) {
        if (stringEncriptada.includes(llavesEncriptacion[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1])
        }
    }

    return stringEncriptada
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(input.value);
    textarea.value = textoDesencriptado
    input.value = "";
}

function desencriptar(stringDesencriptada) {
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < llavesEncriptacion.length; i++) {
        if (stringDesencriptada.includes(llavesEncriptacion[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0])
        }
    }

    return stringDesencriptada
}

function btnCopiar() {
    textarea.select();
    document.execCommand("copy");

    alert("El texto ha sido copiado al portapapeles: " + textarea.value);
}