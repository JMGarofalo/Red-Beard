
/* VALIDACION FORMULARIO */

function validar() {
    let nombreValido = validarNombre()
    let emailValido = validarEmail()
    let mensajeValido = validarMensaje()
    return (nombreValido && emailValido && mensajeValido);
}


function validarNombre() {
    let esValido = true;
    let nombre = document.myform.nombre.value.trim();
    if (nombre=="") {
        alert("Ingresar un nombre");
        esValido = false;
    }
    return esValido;
}


function validarEmail() {
    let esValido = true; 
    let email = document.myform.email.value.trim();  
    let atposition = email.indexOf("@");  
    let dotposition = email.lastIndexOf(".");
    if (email=="") {
        alert("Ingresar un email");  
        esValido = false;
    } else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length || email.includes(" ")) {
            alert("Ingresar un email válido");  
            esValido = false;  
    }
    return esValido;  
}  


function validarMensaje() {
    let esValido = true;
    let mensaje = document.myform.mensaje.value.trim();
    if (mensaje=="") {
        alert("Ingresar un mensaje");
        esValido = false;
    }
    return esValido;
}


