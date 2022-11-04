

/* VALIDACION FORMULARIO */

function validar(){
    validarnombre();
    validaremail();
    validarmensaje();
}

function validarnombre(){
    var x=document.myform.nombre.value;
    if (x=="") {
        alert("Ingresar un nombre válido");
        return false;
    }
}
function validaremail()  {  
    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Ingresar un email válido");  
        return false;  
    }  
}  

function validarmensaje(){
    var x=document.myform.mensaje.value;
    if (x=="") {
        alert("Ingresar un mensaje no vacio");
        return false;
    }
}

