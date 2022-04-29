


var textoencriptado, mensaje, reemplazo, textodesencriptado;

function minusculas(){
    

    var regex = /^[a-z\s\s+]+$/
    mensaje = document.getElementById('textoaencriptar').value;
    if(mensaje != textoencriptado){
        if(mensaje == ""){

            alert("Debe ingresar el texto a encriptar")

        }else if(!regex.test(mensaje)){
            alert("tiene caracteres que no son minúsculas sin acento");

        }else{
            encriptar(mensaje);
        }
        
    }else{
        alert("El mensaje ya fue encriptado")
    }
}
 

function encriptar(mensaje){

    document.getElementById("copiar").style.display = "block";
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("texto-encriptado").style.display = "block";
    document.querySelector(".caja p").style.display = "none";
    document.querySelector(".caja p + p").style.display = "none";
        
    reemplazo = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");   
    
    textoencriptado= reemplazo;
    document.getElementById('texto-encriptado').value = textoencriptado;
    document.getElementById('textoaencriptar').value = textoencriptado;
        
    
}

function desencriptar(){

 var textodesencriptado = [];  
 var mensaje1 = document.getElementById('textoaencriptar').value;
 
 if($('#copiar').css('display') == 'none'){

    document.getElementById("copiar").style.display = "block";
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("texto-encriptado").style.display = "block";
    document.querySelector(".caja p").style.display = "none";
    document.querySelector(".caja p + p").style.display = "none";
}   

if(mensaje1 == ""){

        alert("Debe ingresar el texto a desencriptar");

} else{        
             reemplazo = mensaje1
            .replaceAll("enter","e")
            .replaceAll("imes","i")
            .replaceAll("ai","a")
            .replaceAll("ober","o")
            .replaceAll("ufat","u");
            textodesencriptado = reemplazo;
       
            document.getElementById('texto-encriptado').value ="";
            document.getElementById('textoaencriptar').value = "";
            document.getElementById('texto-encriptado').value = textodesencriptado;
            document.getElementById('textoaencriptar').value = textodesencriptado;
                       
                   
        }   
    
}

function copiartexto(){

    var textoacopiar = document.getElementById('texto-encriptado');
    textoacopiar.select();
    document.execCommand('copy');
    alert("Copiado!");

}



