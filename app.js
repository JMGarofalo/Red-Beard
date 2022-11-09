

/* VALIDACION FORMULARIO */

function validar(){
    var nombreValido = validarNombre()
    var emailValido = validarEmail()
    var mensajeValido = validarMensaje()
    return (nombreValido && emailValido && mensajeValido);
}

function validarNombre(){
    var esValido = true;
    var x=document.myform.nombre.value;
    x = x.replace(/\s+/g, "");
    if (x=="") {
        alert("Ingresar un nombre");
        esValido = false;
    }
    return esValido;
}

function validarEmail()  {
    var esValido = true; 
    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Ingresar un email válido");  
        esValido = false;  
    }
    return esValido;  
}  

function validarMensaje(){
    var esValido = true;
    var x=document.myform.mensaje.value;
    x = x.replace(/\s+/g, "");
    if (x=="") {
        alert("Ingresar un mensaje");
        esValido = false;
    }
    return esValido;
}

