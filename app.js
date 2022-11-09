
/* VALIDACION FORMULARIO */

function validar(){
    var nombreValido = validarNombre();
    var emailValido = validarEmail();
    var mensajeValido = validarMensaje();
    return (nombreValido && emailValido && mensajeValido);
}

function validarNombre(){
    var x=document.myform.nombre.value;
    if (x=="") {
        alert("Ingresar un nombre válido");
        return false;
    }
}
function validarEmail()  {  
    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Ingresar un email válido");  
        return false;  
    }  
}  

function validarMensaje(){
    var x=document.myform.mensaje.value;
    if (x=="") {
        alert("Ingresar un mensaje no vacio");
        return false;
    }
}


