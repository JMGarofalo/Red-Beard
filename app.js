

/* VALIDACION FORMULARIO */

function validar(){
    let nombreValido = validarNombre()
    let emailValido = validarEmail()
    let mensajeValido = validarMensaje()
    return (nombreValido && emailValido && mensajeValido);
}

function validarNombre(){
    let esValido = true;
    let x = document.myform.nombre.value;
    x = x.replace(/\s+/g, "");
    if (x=="") {
        alert("Ingresar un nombre");
        esValido = false;
    }
    return esValido;
}

function validarEmail()  {
    let esValido = true; 
    let x = document.myform.email.value;  
    let atposition = x.indexOf("@");  
    let dotposition = x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Ingresar un email válido");  
        esValido = false;  
    }
    return esValido;  
}  

function validarMensaje(){
    let esValido = true;
    let x = document.myform.mensaje.value;
    x = x.replace(/\s+/g, "");
    if (x=="") {
        alert("Ingresar un mensaje");
        esValido = false;
    }
    return esValido;
}

