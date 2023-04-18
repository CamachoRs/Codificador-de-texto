let no_mensajes = document.getElementById("no-mensaje");
let si_mensajes = document.getElementById("si-mensaje");
si_mensajes.style.display = "none";

function encriptar(){
    let codificado = document.getElementById("textarea").value
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    document.getElementById("textarea").value = "";
    document.getElementById("mostrar-mensaje").value = codificado;
    mostrar(codificado);
}

function desencriptar(){
    let descodificado = document.getElementById("textarea").value
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    document.getElementById("textarea").value = "";
    document.getElementById("mostrar-mensaje").value = descodificado;
    mostrar(descodificado);
}

function copiar(){
    let texCopiar = document.getElementById("mostrar-mensaje");
    texCopiar.select();
    document.execCommand('copy')
}

function mostrar(mensaje){
    if(mensaje.length > 0){
        no_mensajes.style.display = "none";
        si_mensajes.style.display = "block";
    }else{
        si_mensajes.style.display = "none";
        no_mensajes.style.display = "block";
    }
}